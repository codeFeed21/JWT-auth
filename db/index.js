const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoConnect = process.env.MONGODB_URL;
mongoose.connect(mongoConnect);

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  purchasedProducts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
    },
  ],
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  description: String,
});

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = {
  Admin,
  User,
  Product,
};
