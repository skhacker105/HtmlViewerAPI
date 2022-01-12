'use strict';

module.exports = function(app) {
    var eventsrroute = require('./events');
    var menupagecontrolrroute = require('./menu-page-control');
    var menurroute = require('./menus');
    var rolesrroute = require('./roless');
    var teamsrroute = require('./teams');
    var usersrroute = require('./users');

    eventsrroute(app);
    menupagecontrolrroute(app);
    menurroute(app);
    rolesrroute(app);
    teamsrroute(app);
    usersrroute(app);
};