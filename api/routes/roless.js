'use strict';

module.exports = function(app) {
    var controllers = require('../controllers/roles');

    // ROLES
    app.route('/roles')
    .get(controllers.get_all_roles)
    .post(controllers.add_role)

    app.route('/roles/:Id')
    .put(controllers.update_role)
    .delete(controllers.delete_role);
};