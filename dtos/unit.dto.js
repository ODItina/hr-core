/**
 * Created by KP_TerminalUser2 on 10/10/2014.
 */
'use strict';

//Unit dto
var Unit = function(args){
    var unit = {};
    unit.unit_name = args.unit_name;
    unit.remarks = args.unit_name;
    unit.created = args.created;
    unit.created_by = args.created_by;

    return unit;
};
module.exports = Unit;