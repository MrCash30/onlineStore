const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Product = require('./models/product');

// connect to db
mongoose.connect('mongodb://localhost:27017/onlineStore', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('MONGO CONNECTION OPEN')
}).catch((err) => {
    console.log('OH NO ... THERE IS NO MONGO CONNECTION')
    console.log(err)
});

// set view app
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index.ejs', { products })
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params 
    const product = await Product.findById(id)
    res.render('products/details', {product} )
})

// test the connection at PORT 
app.listen(PORT, () => {
    console.log(`listen at port ${PORT}`)
})  