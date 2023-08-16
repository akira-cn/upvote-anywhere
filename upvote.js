// @see https://docs.aircode.io/guide/functions/
const {db} = require('aircode');
const table = db.table('upvote');

module.exports = async function (params, context) {
  let {id, redirect = `/show?id=${id}`, link} = params;
  if(link) {
    redirect = `${redirect}&link=1`;
  }
  if(!id) {
    context.status(403);
    return {error: 'invalid id'};
  }
  let record = await table.where({_id: id}).findOne();
  if(!record) {
    context.status(403);
    return {error: 'invalid id'};
  }
  let count = record.count;
  const cookies = context.cookies;
  const _upvoted = `upvoted-${id}`;
  if(cookies[_upvoted]) {
    await table.where({_id: id}).set({count: db.inc(-1)}).save();
    context.clearCookie(_upvoted, {httpOnly: true});
    count--;
  } else {
    await table.where({_id: id}).set({count: db.inc(1)}).save();
    context.setCookie(_upvoted, 1, {httpOnly: true});
    count++
  }
  if(context.method === 'GET') {
    context.redirect(redirect);
  } else {
    return {error: '', id, count, upvoted: !cookies[_upvoted]};
  }
};
