var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/form');

var comSchema = mongoose.Schema({
  Name: {type:String},
  Email: {type:String},
 PhoneNumber:Number,
 Comments:{type:String}  
});


var com = mongoose.model('com', comSchema,'com');

module.exports=com;
