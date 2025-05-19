const express = require('express');
const app = express();
const PORT = 5000;

const sequelize = require('./config/db');
const User = require('./models/users');
const Product = require('./models/products');
const Order = require('./models/orders');
const Review = require('./models/reviews');

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const reviewRoutes = require('./routes/reviews');

app.use(express.json());

// Mount API routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Antique Shop backend API!');
});

