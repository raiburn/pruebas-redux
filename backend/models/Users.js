const {Schema, SchemaType, model} = require('mongoose');

const usuarioSchema = new Schema({
    username:{
        type: String,
        unique: true,
        trim: true,
    },
    name:{
        type: String,
        unique: false,
        trim: true
    },
    password:{
        type: String,
        required: true,
        unique: false,
        trim: false
    }
});

const Users = model('Users', usuarioSchema);
module.exports = Users;