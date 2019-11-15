
const express=require('express')
const parseString = require('xml2js').parseString;
const axios = require('axios');
const constant = require('../constant');
const router=express.Router()

router.get('/WeatherApi',  (req,res) => {
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

module.exports=router