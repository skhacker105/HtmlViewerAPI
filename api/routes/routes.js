'use strict';

module.exports = function(app) {
    var menuController = require('../controllers/controller');
    app.route('/menu')
    .get(menuController.get_all_menu)
    .post(menuController.add_menu);

    app.route('/menu/:Id')
    .put(menuController.update_menu)
    .delete(menuController.delete_menu);
};