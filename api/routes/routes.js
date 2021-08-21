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
};