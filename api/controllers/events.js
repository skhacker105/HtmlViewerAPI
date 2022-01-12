'use strict';

require('../models/events.js');

var mongoose = require('mongoose');
var Events = mongoose.model('Events');


// EVENTS Controllers
exports.get_all_events = function (req, res) {
    Events.find({ menuId: req.params.menuId }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
};

exports.add_event = function (req, res) {
    var newevent = new Events(req.body);
    newevent.save(function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.update_event = function (req, res) {
    Events.findOneAndUpdate({ eventId: req.params.Id }, req.body, { new: true }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json(m);
    });
}

exports.delete_event = function (req, res) {
    Events.remove({ eventId: req.params.Id }, function (err, m) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Event successfully deleted' });
    });
}