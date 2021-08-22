'use strict';

var mongoose = require('mongoose'),
    Menu = mongoose.model('Menu'),
    MenuPageControl = mongoose.model('MenuPageControl'),
    Teams = mongoose.model('Teams'),
    Roles = mongoose.model('Roles'),
    Users = mongoose.model('Users');

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
        res.json({ message: 'Task successfully deleted' });
    });
}


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
        res.json({ message: 'Task successfully deleted' });
    });
}


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
        res.json({ message: 'Task successfully deleted' });
    });
}