const mongoose = require('mongoose')

const cadSchema = new mongoose.Schema({
    id: Number,
    Nome: String,
    Sobrenome: String,
    Nascimento: String,
    Telefone: Number,
    Endereco: String,
    Cidade: String,
    Estado: String,
    Status: String,
    Foto: String
    //Status: Boolean
})

module.exports = mongoose.model('cads', cadSchema)