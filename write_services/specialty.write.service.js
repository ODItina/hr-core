/**
 * Created by KP_TerminalUser2 on 10/10/2014.
 */
'use strict';

var JobRole = require('../models/jobrole');


//Create Sub doc in parent(Job Role)
exports.createSpecialty = function(args, next){
    JobRole.findOne({_id: args.jobrole._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.specialties.push(args);
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

//Update Sub doc in parent(Job Role)
exports.removeSpecialty = function(args, next){
    JobRole.findOne({_id:args.jobrole._id}, function(err, doc){
        if(err){
            return next(err, null);
        }
        if(doc){
            doc.specialties.id(args._id).remove();
            doc.save(function(err){
                if(err){
                    return next(err, null);
                }

            });

        }

    });
};


//Remove Sub doc in parent(Job Role)
exports.updateSpecialty = function(args, next){
    JobRole.findOne({_id: args.jobrole._id}, function(err, doc){
        if(err){
            next(err, null);
        }
        if(doc){
            doc.specialties.id(args._id).set(args);
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
