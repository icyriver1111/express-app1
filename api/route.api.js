var express = require('express')
var router = express.Router()

var postContent = {
  postsList: ['文章1', '文章2', '文章3']
}

router.get('/posts', function(req, res, next){
  res.json(postContent)
})
router.post('/posts/create', function(req, res, next){
  console.log(req)
  var title = req.body.title
  var content = req.body.content
  res.send({title, content})
})

module.exports = router
