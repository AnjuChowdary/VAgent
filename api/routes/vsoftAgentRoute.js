'use strict';
module.exports = function(app){
  var empList = require('../controllers/vsoftAgentController');

  //empList Routes
  app.route('/employee')
    .get(empList.get_all_employees)
    .post(empList.create_an_emp)

  app.route('/employee/:empName')
    .get(empList.get_emp_age)
    // .put(empList.updtae_emp_age)
    // .delete(empList.delete_emp)
    // .get(empList.get_join_date)
}
