// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const table = aircode.db.table('upvote');

module.exports = async function (params, context) {
  const res = await table.save({count: 0});
  context.redirect(`/readme?id=${res._id}`);
};
