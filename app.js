const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.set('Content-Type', 'application/json');
  ctx.body = {
    message: 'Hello World!',
  };
});

exports.listen = (port) =>  app.listen(port);

