'use strict';

require('../models/menu.js');

var mongoose = require('mongoose');
var Menu = mongoose.model('Menu');

    
// MENU Controllers
exports.get_all_menu = function (req, res) {
    Menu.find({}, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
};

exports.add_menu = function (req, res) {
    var newMenu = new Menu(req.body);
    newMenu.save(function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.update_menu = function (req, res) {
    Menu.findOneAndUpdate({ Id: req.params.Id }, req.body, { new: true }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.delete_menu = function (req, res) {
    Menu.remove({ Id: req.params.Id }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Menu successfully deleted' });
    });
}