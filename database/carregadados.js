require('./mongodb')
const mongoose = require('mongoose');
const cadModel = require('../models/cadModel')
const cads = require('./cads.json');

async function carregarDados(){
    try{
        await cadModel.deleteMany({})
        for(const cad of cads){
            await cadModel.create(cad)
        }
        console.log('Carga de cadastros de assinantes feita')
    }catch(err){
        console.log(err)
    }finally{
        process.exit()
    }
}
carregarDados()