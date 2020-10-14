'use strict';
module.exports = function(app) {
    var blog = require('../controllers/blogController');

  // blog Routes
  app.route('/articles')
    .get(blog.list_all_articles)
    .post(blog.create_an_article);

  app.route('/articles/:articleId')
    .get(blog.read_an_article)
    .put(blog.update_an_article)
    .patch(blog.patch_an_article)
    .delete(blog.delete_an_article);

};