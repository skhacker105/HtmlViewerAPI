'use strict';

module.exports = function(app) {
    var menuController = require('../controllers/controller');
    app.route('/menu')
    .get(menuController.get_all_menu)
    .post(menuController.add_menu);

    app.route('/menu/:Id')
    .get(menuController.get_all_page_control)
    .put(menuController.update_menu)
    .delete(menuController.delete_menu);

    app.route('/controls/')
    .post(menuController.add_page_control);

    app.route('/controls/:Id')
    .put(menuController.update_page_control)
    .delete(menuController.delete_page_control);

    app.route('/teams')
    .get(menuController.get_all_teams)
    .post(menuController.add_team)

    app.route('/teams/:Id')
    .put(menuController.update_team)
    .delete(menuController.delete_team);

    app.route('/roles')
    .get(menuController.get_all_roles)
    .post(menuController.add_role)

    app.route('/roles/:Id')
    .put(menuController.update_role)
    .delete(menuController.delete_role);
};