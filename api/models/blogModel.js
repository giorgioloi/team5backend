'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the article title'
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
  tag: {
    type: [{
      type: [String],
      default: ['attualità']
    }],
  }
});

module.exports = mongoose.model('Articles', ArticleSchema);