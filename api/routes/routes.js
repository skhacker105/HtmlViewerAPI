'use strict';

module.exports = function(app) {
    var menuController = require('../controllers/controller');

    // MENU
    app.route('/menu')
    .get(menuController.get_all_menu)
    .post(menuController.add_menu);

    app.route('/menu/:Id')
    .get(menuController.get_all_page_control)
    .put(menuController.update_menu)
    .delete(menuController.delete_menu);


    // CONTROLS
    app.route('/controls/')
    .post(menuController.add_page_control);

    app.route('/controls/:Id')
    .put(menuController.update_page_control)
    .delete(menuController.delete_page_control);

    // TEAMS
    app.route('/teams')
    .get(menuController.get_all_teams)
    .post(menuController.add_team)

    app.route('/teams/:Id')
    .put(menuController.update_team)
    .delete(menuController.delete_team);


    // ROLES
    app.route('/roles')
    .get(menuController.get_all_roles)
    .post(menuController.add_role)

    app.route('/roles/:Id')
    .put(menuController.update_role)
    .delete(menuController.delete_role);


    // USERS
    app.route('/users')
    .get(menuController.get_all_users)
    .post(menuController.add_user)

    app.route('/users/:Id')
    .put(menuController.update_user)
    .delete(menuController.delete_user);


    // EVENTS
    app.route('/events')
    .post(menuController.add_event)

    app.route('/events/:menuId')
    .get(menuController.get_all_events);

    app.route('/events/:Id')
    .put(menuController.update_event)
    .delete(menuController.delete_event);
};