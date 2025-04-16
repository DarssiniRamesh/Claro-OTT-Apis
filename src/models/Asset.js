const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  type: {
    type: String,
    enum: ['video', 'image', 'audio'],
    required: [true, 'Please specify the asset type']
  },
  url: {
    type: String,
    required: [true, 'Please add a URL']
  },
  format: {
    type: String,
    required: [true, 'Please specify the format']
  },
  size: {
    type: Number,
    required: [true, 'Please add the file size']
  },
  metadata: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Metadata',
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Asset', AssetSchema);
