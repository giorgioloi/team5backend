'use strict';
const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    nickname: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model('Comments', CommentSchema);