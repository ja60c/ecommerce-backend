const mongoose = require('../db');
const { Schema } = mongoose;

// SCHEMA DE MODELO PARA BLOG
const authSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// CREANDO EL MODELO CON BASE AL SCHEMA CREADO
const AuthModel = mongoose.model('AuthModel', authSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = AuthModel;