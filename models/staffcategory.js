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
 * StaffCategory Schema
 */
var StaffCategorySchema = new Schema({
    staff_category_name:{
        type: String,
        required:'Please fill this department name',
        trim: true
    },
    staff_category_code:{
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

var StaffCategory = mongoose.model('StaffCategory', StaffCategorySchema);

module.exports = StaffCategory;