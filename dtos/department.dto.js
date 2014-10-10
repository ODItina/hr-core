/**
 * Created by KP_TerminalUser2 on 10/10/2014.
 */
'use strict';

//Department dto

var Department = function(args){
    var department = {};

    department.department_name = args.department_name;
    department.department_code = args.department_code;
    department.created = args.created;
    department.created_by = args.created_by;
    department.units = args.units;

    return department;
};

module.exports = Department;