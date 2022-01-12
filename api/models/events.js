'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema({
    eventId: {
        type: String
    },
    eventName: {
        type: String
    },
    eventType: {
        type: String
    },
    menuId: {
        type: String
    },
    controlId: {
        type: String
    },
    value: {
        type: String
    },
    isOutput: {
        type: Boolean
    }
});

module.exports = mongoose.model('Events', EventsSchema, 'Events');