var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {type: String, require: true, default: 'title'},
  content: {type: String, require: true},
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;
