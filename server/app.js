
const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const router = require('./router');

const app = new Koa();

app.use(serve(path.resolve(__dirname, '../client/dist'))); 
app.use(router.routes()).use(router.allowedMethods())

// 在端口3000监听:
app.listen(3000);