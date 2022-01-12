'use strict';

require('../models/roles.js');

var mongoose = require('mongoose');
var Roles = mongoose.model('Roles');

    
// ROLES Controllers
exports.get_all_roles = function (req, res) {
    Roles.find({}, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
};

exports.add_role = function (req, res) {
    var newteam = new Roles(req.body);
    newteam.save(function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.update_role = function (req, res) {
    Roles.findOneAndUpdate({ roleId: req.params.Id }, req.body, { new: true }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.delete_role = function (req, res) {
    Roles.remove({ roleId: req.params.Id }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Role successfully deleted' });
    });
}