'use strict';
var mongoose = require('mongoose'),
  Article = mongoose.model('Articles'),
  Comment = mongoose.model('Comments');

exports.list_all_articles = function(req, res) {
  Article.find({}, function(err, article) {
    if (err)
      res.send(err);
    res.json(article);
  });
};

exports.read_an_article = function(req, res) {
    Article.findById(req.params.articleId, function(err, article) {
      if (err)
        res.send(err);
      res.json(article);
    });
  };

  exports.create_an_article = function(req, res) {
    var new_article = new Article(req.body);
    new_article.save(function(err, article) {
      if (err)
        res.send(err);
      res.json(article);
    });
  };

  exports.update_an_article = function(req, res) {
    let query = req.query;
    Article.findOneAndUpdate({_id: req.params.articleId}, 
                          query, {new: true}, 
                          function(err, article) {
      if (err)
        res.send(err);
      res.json(article);
    });
  };


  exports.patch_an_article = function(req, res) {
    let query = req.body;
    Article.findOneAndUpdate({_id: req.params.articleId},
      { $set: query }, {new: true},
                          function(err, article) {
      if (err)
        res.send(err);
      res.json(article);
    });
  };

  exports.delete_an_article = function(req, res) {
    Article.remove({
      _id: req.params.articleId
    }, function(err, article) {
      if (err)
        res.send(err);
      res.json({ message: 'Article successfully deleted' });
    });
  };

//Comments methods
exports.list_all_comments = function(req, res) {
  Comment.find({}, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.read_comment = function(req, res) {
  Comment.findById(req.params.articleId, function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.create_comment = function(req, res) {
  var new_comment = new Comment(req.body);
  new_comment.save(function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.patch_comment = function(req, res) {
  let query = req.body;
  Article.findOneAndUpdate({_id: req.params.articleId},
    { $set: query }, {new: true},
                        function(err, comment) {
    if (err)
      res.send(err);
    res.json(comment);
  });
};

exports.delete_comment = function(req, res) {
  Article.remove({
    _id: req.params.articleId
  }, function(err, comment) {
    if (err)
      res.send(err);
    res.json({ message: 'Comment successfully deleted' });
  });
};