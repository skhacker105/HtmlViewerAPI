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

var MenuPageControlSchema = new Schema({
    menuId: {
        type: String,
        required: 'Menu ID is required'
    },
    controlId: {
        type: String
    },
    controlProperties: {
        type: String
    },
    controlEvents: {
        type: String
    },
    parentControlId: {
        type: String
    },
    
});

module.exports = mongoose.model('Menu', MenuSchema, 'Menu');
module.exports = mongoose.model('MenuPageControl', MenuPageControlSchema, 'MenuPageControl');