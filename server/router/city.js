const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const cityList = fs.readFileSync(path.resolve(__dirname, '../json/city.json'), 'utf-8');

const router = new Router();

router.get('/list', (ctx) =>{
    try{
        ctx.body = JSON.parse(cityList).city;
        ctx.status = 200;
    }catch(err){
        ctx.status = 500;
    }
})

module.exports=router

