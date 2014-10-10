/**
 * Created by Dominic on 15-Sep-2014.
 */
var department = require('./dtos/department.dto'),
    jobrole = require('./dtos/jobrole.dto'),
    specialty = require('./dtos/specialty.dto'),
    staffcategory = require('./dtos/staffcategory.dto'),
    unit = require('./dtos/unit.dto');

var _ = require('lodash');

module.exports.read = _.extend(
    require('./read_services/department.read.service'),
    require('./read_services/jobrole.read.service'),
    require('./read_services/staffcategory.read.service')

);


module.exports.write = _.extend(
    require('./write_services/department.write.service'),
    require('./write_services/jobrole.write.service'),
    require('./write_services/staffcategory.write.service'),
    require('./write_services/specialty.write.service'),
    require('./write_services/unit.write.service')
);

module.exports.dto = {
    Department:department,
    JobRole:jobrole,
    Specialty:specialty,
    StaffCategory:staffcategory,
    Unit:unit

};
