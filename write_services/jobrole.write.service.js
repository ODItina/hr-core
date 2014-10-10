/**
 * Created by Dominic on 02-Oct-2014.
 */

'use strict';

var JobRole = require('../models/jobrole'),
    _ = require('lodash');
//Create
exports.createJobRole = function(args, next){
    var jobRole = new JobRole(args);
    jobRole.save(function(err, result) {
        if (err) {
            return next(err, null);
        }
        if(result) {
            return next(null, result);
        }
    });
};
//Update
exports.updateJobRole = function(args, next){
    JobRole.findOne(args._id, function(err, doc){
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


//Delete
exports.removeJobRole = function(args, next){
    JobRole.remove({_id:args._id}, function(err){
        if(err){
            return next(err, false);
        }
        return next(null, true);
    });
};