'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the article title'
  },
  subtitle: {
    type: String,
    required: 'Kindly enter the article subtitle'
  },
  body: {
    type: String,
    required: 'Kindly enter the article body'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  public: {
    type: Boolean,
    default: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  author: {
    type: String,
    required: 'Kindly enter the article author'
  },
  imgurl: {
    type: String,
    required: 'Kindly enter the img url'
  },
  tag: {
    type: [{
      type: [String],
      default: ['attualità']
    }],
  },
  comments: {
    type: Schema.Types.ObjectId,
      ref: 'Comments',
    }
});


module.exports = mongoose.model('Articles', ArticleSchema);
