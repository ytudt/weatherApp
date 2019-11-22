const parseString = require('xml2js').parseString;
const axios = require('axios');
const constant = require('../constant');
const Router = require('koa-router')

const router = new Router();

router.get('/WeatherApi', async(ctx) => {
    const {url} = ctx;
    try{
        const response = await axios.get(`${constant.URL.wether}${url.replace('/api/wether', '')}`);
        const {status, data} = response;
        parseString(data, (err, reslut) => {
           ctx.body = reslut;
           ctx.status = status;
        })
    }catch(e){
        ctx.status = 500;
    }
})

module.exports=router