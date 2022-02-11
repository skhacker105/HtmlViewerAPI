'use strict';

require('../models/users.js');

var mongoose = require('mongoose');
var Users = mongoose.model('Users');
const { API_ENV } = process.env;
    
// USERS Controllers
exports.get_login_user = function (req, res) {
    var helper = require('../utilities/helpers');
    var u = req.body.userName;
    var p = helper.generate_hash(req.body.password);
    Users.find({ userName: { $regex : new RegExp(u, "i") }, password: p }, function (err, m) {
        if (err) {
            res.send(err);
        }
        if (m && m.length > 0) {
            let user = JSON.parse(JSON.stringify(m[0]));
            delete user['password'];
            const token = helper.generate_token();
            res.cookie('token',token, {
                maxAge: 24 * 60 * 60 * 1000
            });
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    });
};

exports.logout = function(req, res) {
    // req.session.destoroy();
    res.send();
}

exports.get_all_users = function (req, res) {
    Users.find({}, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
};

exports.add_user = function (req, res) {
    var newuser = new Users(req.body);
    var helper = require('../utilities/helpers');
    var defaultValue = require('../utilities/default_values');
    newuser.password = helper.generate_hash(defaultValue.default_password);
    newuser.save(function (err, m) {
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