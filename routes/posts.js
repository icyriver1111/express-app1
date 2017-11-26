
var express = require('express');
var router = express.Router();

router.get('/posts', function(req, res, next){
  res.send('hello')
  res.render('posts', {mytitle: "my posts"});
});

module.exports = router;
