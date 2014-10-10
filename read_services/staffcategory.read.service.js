/**
 * Created by Dominic on 02-Oct-2014.
 */
'use strict';

var staffCategoryModel = require('../models/staffcategory');

exports.getStaffCategories = function(args, next){
    staffCategoryModel.find({},function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};

exports.getStaffCategory = function(args, next){
    staffCategoryModel.findOne({_id:args._id}, function(err, result){
        if(err){
            return next(err, null);
        }
        if(result){
            return next(null, result);
        }
    });
};