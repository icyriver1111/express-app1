var express = require('express')
var router = express.Router()

var postContent = {
  postsList: ['文章1', '文章2', '文章3']
}

router.get('/posts', function(req, res, next){
  res.json(postContent)
})

module.exports = router
