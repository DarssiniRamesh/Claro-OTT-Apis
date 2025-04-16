const mongoose = require('mongoose');

const MetadataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true
  },
  type: {
    type: String,
    enum: ['movie', 'series', 'episode'],
    required: [true, 'Please specify the type']
  },
  genre: {
    type: [String],
    required: [true, 'Please add at least one genre']
  },
  releaseDate: {
    type: Date,
    required: [true, 'Please add a release date']
  },
  duration: {
    type: Number,
    required: function() { return this.type !== 'series'; }
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Metadata', MetadataSchema);
