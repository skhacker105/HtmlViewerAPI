'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamsSchema = new Schema({
    teamId: {
        type: String
    },
    teamName: {
        type: String
    },
    parentTeamId: {
        type: String
    }
    
});

module.exports = mongoose.model('Teams', TeamsSchema, 'Teams');