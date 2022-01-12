'use strict';

require('../models/menu-page-control.js');

var mongoose = require('mongoose');
var MenuPageControl = mongoose.model('MenuPageControl');

    
// Menu Page Controls Controllers
exports.get_all_page_control = function (req, res) {
    MenuPageControl.find({ menuId: req.params.Id }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
};

exports.add_page_control = function (req, res) {
    var newControl = new MenuPageControl(req.body);
    newControl.save(function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.update_page_control = function (req, res) {
    MenuPageControl.findOneAndUpdate({ controlId: req.params.Id }, req.body, { new: true }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.delete_page_control = function (req, res) {
    MenuPageControl.remove({ controlId: req.params.Id }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Page Control successfully deleted' });
    });
}