const mongoose = require('mongoose')

const { Schema } = mongoose

const DbUsers =new Schema({
    name:String,
    coste:String
})

const Model = mongoose.model('users', DbUsers);
module.exports = Model;
