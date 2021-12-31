const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/onlineStore', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('MONGO CONNECTION OPEN')
}).catch((err) => {
    console.log('OH NO ... THERE IS NO MONGO CONNECTION')
    console.log(err)
});

// reason buat seed db adalah sebagai roots utk db yg lain
// utk test the db connected 
const seedProducts = [
    {
        name: 'Trouser',
        price: 1.00,
        category: 'men',
        size: 'S',
        description: 'stretch to the bone'
    },
    {
        name: 'Yellow Top',
        price: 4.99,
        category: 'woman',
        size: 'L',
        description: 'brighter than the sun'
    },
    {
        name: 'Watermelon Polo shirt',
        price: 9.99,
        category: 'men',
        size: 'M',
        description: 'delicious and juicy like a watermelon'
    },
    {
        name: 'Organic Jeans',
        price: 5.50,
        category: 'kids',
        size: 'L',
        description: 'fresh out of farm'
    },
    {
        name: 'Chocolate Skirt',
        price: 12.69,
        category: 'woman',
        size: 'S',
        description: 'sweet like a chocolate'
    },
]

// ada byk mongoose method at link: https://mongoosejs.com/docs/models.html
Product.insertMany(seedProducts).then(res => {
    console.log(res).catch((err) => {
        console.log(err)
    })
})