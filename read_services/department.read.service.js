/**
 * Created by Dominic on 02-Oct-2014.
 */
'use strict';

var departmentModel = require('../models/department');

exports.getDepartments = function(args, next){
    departmentModel.find({},function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.getDepartment = function(args, next){
    departmentModel.findOne({_id:args._id}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};