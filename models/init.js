var mongoose = require('mongoose')
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:32768', {
  useMongoClient: true
},function(err){
  if(err){
    console.log('链接出错:', err);
    return;
  }
  console.log("数据库链接成功")
})
