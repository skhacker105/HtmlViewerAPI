'use strict';

var mongoose = require('mongoose'),
    Menu = mongoose.model('Menu'),
    MenuPageControl = mongoose.model('MenuPageControl');

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
        res.json({ message: 'Task successfully deleted' });
    });
}


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
    console.log('req.body = ', req.body);
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
        res.json({ message: 'Task successfully deleted' });
    });
}