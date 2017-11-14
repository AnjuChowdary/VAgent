'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name:{
    type:String,
    require:"Please enter the name of Employee"
  },
  age:{
    type:Number,
    require:"Please entre the age of Employee"
  },
  joindate:{
    type:Date,
    default:Date.now
  }
});

module.exports = mongoose.model("Employees",TaskSchema);
