'use strict';

module.exports = function(app) {
    var controllers = require('../controllers/menu-page-controls');

    // CONTROLS
    app.route('/controls/')
    .post(controllers.add_page_control);

    app.route('/controls/:Id')
    .put(controllers.update_page_control)
    .delete(controllers.delete_page_control);
};