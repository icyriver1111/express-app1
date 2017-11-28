
var express = require('express');
var router = express.Router();
var marked = require('marked')
var PostModel = require('../models/post')
//这里下面的get('/')为何这样设计呢，不直接写成get('/posts')
var postContent = {
  mytitle: '我的文章',
  postsList: ['文章1', '文章2', '文章3']
}
//posts
router.get('/', function(req, res, next){
  res.render('posts', postContent);
});
//posts/create
router.get('/create', function(req, res, next){
  res.render('create')
})
//posts/show/id
router.get('/show', function(req, res, next){
  var id = req.query.id
  PostModel.findOne({_id: id},function(err, post){
    post.content = marked(post.content)
    res.render('show', {post})
  })
})

//posts/edit/id
router.get('/edit', function(req, res, next){
  var id = req.query.id;
  res.render('edit', {id})
})

// router.get('/list', function(req, res,next){
//   // res.json(postContent)
//   res.json(postContent)
// })

module.exports = router;
