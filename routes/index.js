var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')
var marked = require('marked')


/* GET home page. */
router.get('/', function(req, res, next) {
  //读取public/mds下面的md文件内容
  var fileContent = ''

/*  var file1 = function(){
    return (fs.readFile(path.join(__dirname, '../public/mds/1.md'),"utf8" ,function(err, data){
        if(err){
          console.log(err)
        }else{
          return marked(data)
        }
      }))
  }
var file2 = file1()
console.log(file2)
*/

/*var file1 = function(arr){
  fs.readFile(path.join(__dirname, '../public/mds/1.md'),"utf8" ,function(err, data){
     if(err){
       console.log(err)
     }else{
       arr= marked(data)
     }
   });

}


  console.log(file1())
  */
//
// fs.readFile(path.join(__dirname, '../public/mds/1.md'),"utf8" ,function(err, data){
//     if(err){
//       console.log(err)
//     }else{
//       //console.log(typeof data)
//       fileContent = marked(data)
//       //console.log(fileContent)
//       return fileContent
//     }
//   });

var file1 = fs.readFileSync(path.join(__dirname, '../public/mds/1.md'),"utf8")
//console.log(marked(file1))
 //console.log(fileContent)
  res.render('index', { title: 'My First WebApp' , article: marked(file1)});

});

module.exports = router;
