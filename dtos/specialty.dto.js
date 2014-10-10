/**
 * Created by KP_TerminalUser2 on 10/10/2014.
 */
'use strict';

//Specialty dto
var Speciality = function(args){
    var specialty  = {};
    specialty.specialty_name = args.specialty_name;
    specialty.remarks = args.remarks;
    specialty.created = args.created;
    specialty.created_by = args.created_by;

    return specialty;
};
module.exports = Speciality;