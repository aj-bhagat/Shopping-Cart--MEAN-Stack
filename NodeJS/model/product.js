const mongoose = require('mongoose');

var Product = mongoose.model('Product',{
    imagepath: String ,
    brand: String,
    category: String,
    price: String,
    details: String 
});

module.exports = {Product}; 