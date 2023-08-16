// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

const table = aircode.db.table('upvote');

function numberFormat(num) {
  if(num < 1000) return num.toString();
  if(num >= 1000 && num <= 99999) {
    return `(num / 1e3).toFixed(1)k`;
  }
  return `(num / 1e6).toFixed(1)m`;
}

function createSVG(params, options) {
  const color = options.isUpvoted? options.upvoted: options.normal;
  let linkStart = '';
  let linkEnd = '';
  if(options.link) {
    linkStart = `<a href="/upvote?id=${options.id}&amp;link=1">`;
    linkEnd = '</a>';
  }
  return `<svg viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
  ${linkStart}<rect x="1" y="1" width="48" height="58" rx="2.5" stroke="${options.noborder?'transparent':color}" fill="transparent"/>
  <polygon points="5,25,45,25,25,-5" fill="${color}" transform="scale(0.6)" transform-origin="50% 50%"/>
  <text x="25" y="45" fill="${options.normal}" font-size="16px" alignment-baseline="middle" text-anchor="middle">${numberFormat(params.count)}</text>${linkEnd}
</svg>`;
}

module.exports = async function (params, context) {
  const {id, normal = '#4b587c', upvoted = '#f53f3f', link = false, noborder = false} = params;
  if(!id) {
    context.status(403);
    return {error: 'invalid id'};
  }
  let record = await table.where({_id: id}).findOne();
  if(!record) {
    context.status(404);
    return {error: 'invalid id'};
  }
  context.set('Expires', (new Date(Date.now() - 1e6)).toUTCString());
  context.set('Cache-Control', 'no-cache, no-store, must-revalidate;');
  context.set('Pragma', 'no-cache');
  context.set('X-Content-Type-Options', 'nosniff');
  context.set('content-type', 'image/svg+xml');
  const cookies = context.cookies;
  return createSVG(record, {normal, upvoted, isUpvoted: !!cookies[`upvoted-${id}`], link, id, noborder});
};
