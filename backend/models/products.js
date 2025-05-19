const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Product;
