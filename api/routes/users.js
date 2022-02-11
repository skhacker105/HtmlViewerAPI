'use strict';

module.exports = function(app) {
    var controllers = require('../controllers/users');

    // USERS
    app.route('/users')
    .get(controllers.get_all_users)
    .post(controllers.add_user)

    app.route('/users/:Id')
    .put(controllers.update_user)
    .delete(controllers.delete_user);

    app.route('/users/login')
    .post(controllers.get_login_user);

    app.route('/users/logout')
    .get(controllers.logout);
};