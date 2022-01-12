'use strict';

module.exports = function(app) {
    var controllers = require('../controllers/menu');
    var controllers1 = require('../controllers/menu-page-controls');

    // MENU
    app.route('/menu')
    .get(controllers.get_all_menu)
    .post(controllers.add_menu);

    app.route('/menu/:Id')
    .get(controllers1.get_all_page_control)
    .put(controllers.update_menu)
    .delete(controllers.delete_menu);
};