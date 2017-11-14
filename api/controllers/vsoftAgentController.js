'use strict';

var mongoose = require('mongoose');
Task = mongoose.model('Employees');

exports.get_all_employees = function(req, res){
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_an_emp = function(req, res){
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.get_emp_age = function(req, res){
  Task.findById(req.params.empName, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

// exports.get_join_date = function(req, res){
//
// }
