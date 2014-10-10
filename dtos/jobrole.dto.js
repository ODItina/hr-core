/**
 * Created by KP_TerminalUser2 on 10/10/2014.
 */
'use strict';

//Job role dto

var JobRole = function(args){
    var role = {};

    role.role_name = args.role_name;
    role.created = args.created;
    role.created_by = args.created_by;
    role.specialties = args.specialties;

    return role;

};
module.exports = JobRole;