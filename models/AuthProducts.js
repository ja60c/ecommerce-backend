const mongoose = require('../db');
const { Schema } = mongoose;

// SCHEMA DE MODELO PARA BLOG
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    enum: true
  },
  category: {
    type: String,
    enum: ['men', 'women', 'kids', 'accesories'],
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
const ProductsModel = mongoose.model('ProductsModel', productSchema);

// EXPORTAR MODELO PARA SU USO
module.exports = ProductsModel;