// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const path = require('path');
const express = require('express')
const router = require('./router');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/dist')));
router(app);
// 在端口3000监听:
app.listen(3000);