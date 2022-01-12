'use strict';

require('../models/users.js');

var mongoose = require('mongoose');
var Users = mongoose.model('Users');

    
// USERS Controllers
exports.get_all_users = function (req, res) {
    Users.find({}, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
};

exports.add_user = function (req, res) {
    var newteam = new Users(req.body);
    newteam.save(function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.update_user = function (req, res) {
    Users.findOneAndUpdate({ userId: req.params.Id }, req.body, { new: true }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.delete_user = function (req, res) {
    Users.remove({ userId: req.params.Id }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'User successfully deleted' });
    });
}