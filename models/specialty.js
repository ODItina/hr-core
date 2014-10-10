/**
 * Created by Dominic on 02-Oct-2014.
 */

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Specialty Schema
 */
var SpecialtySchema = new Schema({
    specialty_name:{
        type: String,
        required:'Please fill this department name',
        trim: true

    },
    remarks:{
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
    }


});



module.exports = SpecialtySchema;
