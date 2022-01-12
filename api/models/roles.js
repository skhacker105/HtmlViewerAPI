'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
    roleId: {
        type: String
    },
    roleName: {
        type: String
    },
    parentRoleId: {
        type: String
    }
    
});

module.exports = mongoose.model('Roles', RolesSchema, 'Roles');