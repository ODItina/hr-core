/**
 * Created by Dominic on 02-Oct-2014.
 */
'use strict';

var jobRoleModel = require('../models/jobrole');

exports.getJobRoles = function(args, next){
    jobRoleModel.find({},function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.getJobRole = function(args, next){
    jobRoleModel.findOne({_id:args._id}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};