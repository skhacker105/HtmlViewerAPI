'use strict';

require('../models/teams.js');

var mongoose = require('mongoose');
var Teams = mongoose.model('Teams');

    
// TEAMS Controllers
exports.get_all_teams = function (req, res) {
    Teams.find({}, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
};

exports.add_team = function (req, res) {
    var newteam = new Teams(req.body);
    newteam.save(function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.update_team = function (req, res) {
    Teams.findOneAndUpdate({ teamId: req.params.Id }, req.body, { new: true }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.delete_team = function (req, res) {
    Teams.remove({ teamId: req.params.Id }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Team successfully deleted' });
    });
}