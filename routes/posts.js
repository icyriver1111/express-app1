
var express = require('express');
var router = express.Router();
//这里下面的get('/')为何这样设计呢，不直接写成get('/posts')
var postContent = {
  mytitle: 'my postsss',
  postsList: ['文章1', '文章2', '文章3']
}
router.get('/', function(req, res, next){
  res.render('posts', postContent);
});
router.get('/list', function(req, res,next){
  // res.json(postContent)
  res.json(postContent)
})

module.exports = router;
