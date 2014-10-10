/**
 * Created by Dominic on 02-Oct-2014.
 */



'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    UnitSchema = require('./unit');


/**
 * Department Schema
 */
var DepartmentSchema = new Schema({
   department_name:{
        type: String,
        required:'Please fill this department name',
        trim: true

    },
    department_code:{
        type: Schema.ObjectId,
        ref: 'Section',
        required:'Please fill this person'
    },

    created: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: Schema.ObjectId,
        ref: 'Account',
        required:'Please fill task creator'
    },


    units : [UnitSchema]


});

var Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;