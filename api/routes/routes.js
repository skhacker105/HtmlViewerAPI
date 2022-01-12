'use strict';

module.exports = function(app) {
    var controllers = require('../controllers/controller');

    // MENU
    app.route('/menu')
    .get(controllers.get_all_menu)
    .post(controllers.add_menu);

    app.route('/menu/:Id')
    .get(controllers.get_all_page_control)
    .put(controllers.update_menu)
    .delete(controllers.delete_menu);


    // CONTROLS
    app.route('/controls/')
    .post(controllers.add_page_control);

    app.route('/controls/:Id')
    .put(controllers.update_page_control)
    .delete(controllers.delete_page_control);

    // TEAMS
    app.route('/teams')
    .get(controllers.get_all_teams)
    .post(controllers.add_team)

    app.route('/teams/:Id')
    .put(controllers.update_team)
    .delete(controllers.delete_team);


    // ROLES
    app.route('/roles')
    .get(controllers.get_all_roles)
    .post(controllers.add_role)

    app.route('/roles/:Id')
    .put(controllers.update_role)
    .delete(controllers.delete_role);


    // USERS
    app.route('/users')
    .get(controllers.get_all_users)
    .post(controllers.add_user)

    app.route('/users/:Id')
    .put(controllers.update_user)
    .delete(controllers.delete_user);


    // EVENTS
    app.route('/events')
    .post(controllers.add_event)

    app.route('/events/:menuId')
    .get(controllers.get_all_events);

    app.route('/events/:Id')
    .put(controllers.update_event)
    .delete(controllers.delete_event);
};