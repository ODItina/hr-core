/**
 * Created by Dominic on 02-Oct-2014.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SpecialtySchema = require('./specialty');


/**
 * JobRole Schema
 */
var JobRoleSchema = new Schema({
    role_name:{
        type: String,
        required:'Please fill this department name',
        trim: true

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


    specialties : [SpecialtySchema]


});

var JobRole = mongoose.model('JobRole', JobRoleSchema);


module.exports = JobRole;
