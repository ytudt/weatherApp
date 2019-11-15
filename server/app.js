// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const path = require('path');
const express = require('express')
const parseString = require('xml2js').parseString;
const axios = require('axios');
const constant = require('./constant');

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/wether/*',  (req,res) => {
    const {url} = req;
    return  axios.get(`${constant.URL.wether}${url.replace('/api/wether', '')}`)
    .then((response) => {
      const {status} = response;
      try{
        parseString(response.data, (err, reslut) => {
          res.status(status).json(reslut);
        })
      }catch(err){
        res.status(500).send({ error: err });
      }
    }).catch((err) => {
      res.status(500).send({ error: err });
    });
})
// 在端口3000监听:
app.listen(8000);