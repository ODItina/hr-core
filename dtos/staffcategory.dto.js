/**
 * Created by KP_TerminalUser2 on 10/10/2014.
 */
'use strict';

//Staff Category dto
var StaffCategory = function(args){
    var category = {};

    category.staff_category_name = args.staff_category_name;
    category.staff_category_code = args.staff_category_code;
    category.created = args.created;
    category.created_by = args.created_by;

    return category;
};
module.exports = StaffCategory;