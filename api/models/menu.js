'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
    Id: {
        type: String,
        required: 'Menu ID is required'
    },
    name: {
        type: String,
        required: 'Menu Name is required'
    },
    order: {
        type: Number
    },
    parent: {
        type: String
    }
});

module.exports = mongoose.model('Menu', MenuSchema, 'Menu');