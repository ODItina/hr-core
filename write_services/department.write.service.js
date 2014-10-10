/**
 * Created by Dominic on 02-Oct-2014.
 */

'use strict';

var Department = require('../models/department'),
_ = require('lodash');
//Create
exports.createDepartment = function(args, next){
    var department = new Department(args);
    department.save(function(err, result) {
        if (err) {
            return next(err, null);
        }
        if(result) {
            return next(null, result);
        }
    });
};


//Update
exports.updateDepartment = function(args, next){
    Department.findOne(args._id, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc = _.extend(doc, args);

            doc.save(function(err){
                if(!err){
                    return  next(null,doc);
                }
            });
        }
    });
};

//Remove
exports.removeDepartment = function(args, next){
    Department.remove({_id:args._id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};