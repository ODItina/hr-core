/**
 * Created by KP_TerminalUser2 on 10/10/2014.
 */
'use strict';

var Department = require('../models/department');


//Create Sub doc in parent(Department)
exports.createUnit = function(args, next){
    Department.findOne({_id: args.department._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.units.push(args);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};


//Update Sub doc in parent(Department)
exports.removeUnit = function(args, next){
    Department.findOne({_id:args.department._id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.units.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};


//Remove Sub doc in parent(Department)
exports.updateUnit = function(args, next){
    Department.findOne({_id: args.department._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.units.id(args._id).set(args);
            doc.save(function(err,result){
                if(err){
                    next(err,null);
                }
                if(result){
                    next(null,result);
                }
            });
        }
    });
};
