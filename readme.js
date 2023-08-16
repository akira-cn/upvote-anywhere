// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const App = require('aircode-app');
const {Marked} = require('marked');
const {markedHighlight} = require('marked-highlight');
const hljs = require('highlight.js');
const fs = require('node:fs');
const table = aircode.db.table('upvote');

const marked = new Marked(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  })
);

const app = new App();

app.use(async (ctx, next) => {
  const {params} = ctx;
  let record = await table.where({_id: params.id}).findOne();
  if(!record) {
    context.status(404);
    ctx.body = {error: 'invalid id'};
  }
  const url = `https://${ctx.host}`
  const source = app.display('./views/info.md', {params, url});
  const content = marked.parse(source);
  ctx.set('content-type', 'text/html');
  ctx.body = app.display('./views/index.tpl', {params, content});
});

module.exports = app.run();