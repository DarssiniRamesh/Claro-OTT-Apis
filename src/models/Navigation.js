const mongoose = require('mongoose');

const NavigationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  path: {
    type: String,
    required: [true, 'Please add a path'],
    unique: true
  },
  icon: {
    type: String
  },
  order: {
    type: Number,
    required: [true, 'Please add an order number']
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Navigation'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Navigation', NavigationSchema);
