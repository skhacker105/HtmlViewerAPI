'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    }
});

module.exports = mongoose.model('MenuPageControl', MenuPageControlSchema, 'MenuPageControl');