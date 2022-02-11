'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    userId: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    roleId: {
        type: String
    },
    teamIds: {
        type: String
    }
    
});

module.exports = mongoose.model('Users', UsersSchema, 'Users');