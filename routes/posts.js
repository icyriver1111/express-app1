
var express = require('express');
var router = express.Router();
var PostModel = require('../models/post')
//这里下面的get('/')为何这样设计呢，不直接写成get('/posts')
var postContent = {
  mytitle: 'my postsss',
  postsList: ['文章1', '文章2', '文章3']
}
router.get('/', function(req, res, next){
  res.render('posts', postContent);
});

router.get('/create', function(req, res, next){
  res.render('create')
})

router.get('/show', function(req, res, next){
  var id = req.query.id
  PostModel.findOne({_id: id},function(err, post){
    res.render('show', {post})
  })
})
// router.get('/list', function(req, res,next){
//   // res.json(postContent)
//   res.json(postContent)
// })

module.exports = router;
