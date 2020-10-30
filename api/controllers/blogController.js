'use strict';
var mongoose = require('mongoose'),
  Article = mongoose.model('Articles')

exports.list_all_articles = function (req, res) {
  Article.find({}, function (err, article) {
    if (err)
      res.send(err);
    else
      res.json(article);
  })
};

exports.read_an_article = function (req, res) {
  Article.findById(req.params.articleId, function (err, article) {
    if (err)
      res.send(err);
    else
      res.json(article);
  });
};

exports.create_an_article = function (req, res) {
  var new_article = new Article(req.body);
  new_article.save(function (err, article) {
    if (err)
      res.send(err);
    else
      res.json(article);
  });
};

exports.update_an_article = function (req, res) {
  let query = req.query;
  Article.findOneAndUpdate({ _id: req.params.articleId },
    query, { new: true },
    function (err, article) {
      if (err)
        res.send(err);
      else
        res.json(article);
    });
};


exports.patch_an_article = function (req, res) {
  let query = req.body;
  Article.findOneAndUpdate({ _id: req.params.articleId },
    { $set: query }, { new: true },
    function (err, article) {
      if (err)
        res.send(err);
      else
        res.json(article);
    });
};

exports.delete_an_article = function (req, res) {
  Article.remove({
    _id: req.params.articleId
  }, function (err, article) {
    if (err)
      res.send(err);
    else
      res.json({ message: 'Article successfully deleted' });
  });
};

//creazione commento dato articleId

exports.create_comment = function (req, res) {
  let query = req.body;
  Article.findOneAndUpdate({ _id: req.params.articleId },
    { $push: { comments: query } }, { new: true },
    function (err, article) {
      if (err)
        res.send(err);
      else
        res.json(article);
    });
};

//leggere tutti i commenti di un dato articolo

exports.list_all_comments = function (req, res) {
  Article.findById(req.params.articleId, function (err, article) {
    if (err)
      res.send(err);
    else
      res.json(article.comments);
  });
};

//trovare un commento dato un commentId route('/:commentId')
exports.read_comment = function (req, res) {
  Article.findOne({ "comments._id": req.params.commentId }, { "comments.$": 1 }, function (err, comment) {
    if (err)
      res.send(err);
    else
      res.json(comment);
  });
};