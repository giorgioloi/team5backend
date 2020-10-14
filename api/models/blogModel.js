'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
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
  }
});


var CommentSchema = new Schema({
  _id:{ 
    type: Schema.Types.ObjectId, ref: 'Articles'
  },
  nickname: {
    type: String,
    required: 'Kindly enter the author nickname'
  },
  body: {
    type: String,
    required: 'Kindly enter the comment'
  }
});

module.exports = mongoose.model('Articles', ArticleSchema);
module.exports = mongoose.model('Comments', CommentSchema);