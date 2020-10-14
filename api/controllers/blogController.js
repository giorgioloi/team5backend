'use strict';
var mongoose = require('mongoose'),
  Article = mongoose.model('Articles');

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


