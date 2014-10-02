'use strict';
/**
 * Created by Dominic on 10-Sep-2014.
 */
var mongoose = require('mongoose');


var childSchema = mongoose.Schema({
    sample_name: {type:String, required:true, unique:true}
});
var sampleSchema = mongoose.Schema({
    name : {type:String, required:true, unique:true},
    primary_location_type : {type:String},
    children : [childSchema]
});

var Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;
