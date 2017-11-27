var express = require('express')
var router = express.Router()
var PostModel = require('../models/post')


router.get('/posts', function(req, res, next){
  PostModel.find({}, {}, function(err, posts){
    if(err){
      res.json({success: false});
    }else {
      res.json({success: true, postsList: posts})
    }

  });
})
router.post('/posts/create', function(req, res, next){
  //console.log(req)
  var title = req.body.title
  var content = req.body.content
  console.log({title, content})

  var post = new PostModel();
  post.title = title;
  post.content = content;
  post.save(function(err){
    if(err){
    res.json({success: false})
    }else{
    res.json({success: true})
    }

  });
})

module.exports = router
