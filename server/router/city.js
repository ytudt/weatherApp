const fs = require('fs')
const path = require('path')
const express=require('express')
const router=express.Router()
const cityList = fs.readFileSync(path.resolve(__dirname, '../json/city.json'), 'utf-8');

router.get('/list', (req, res) =>{
    try{
        res.status(200).json(JSON.parse(cityList).city);
    }catch(err){
        res.status(500).send({ error: err });;
    }
 
})

module.exports=router

