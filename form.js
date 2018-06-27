var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/form');

var daSchema = mongoose.Schema({
  name: {type:String},
  password: Number,  
  
});


var fo = mongoose.model('fo', foSchema,'fo');

module.exports=fo;

