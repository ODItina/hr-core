/**
 * Created by Dominic on 02-Oct-2014.
 */

'use strict';

var StaffCategory = require('../models/staffcategory'),
_ = require('lodash');

//Create
exports.createStaffCategory = function(args, next){
    var staffCategory = new StaffCategory(args);
    staffCategory.save(function(err, result) {
        if (err) {
            return next(err, null);
        }
        if(result) {
            return next(null, result);
        }
    });
};


//Update
exports.updateStaffCategory = function(args, next){
    StaffCategory.findOne(args._id, function(err, doc){
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
exports.removeStaffCategory = function(args, next){
    StaffCategory.remove({_id:args._id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};