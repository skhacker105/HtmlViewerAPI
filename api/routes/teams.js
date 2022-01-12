'use strict';

module.exports = function(app) {
    var controllers = require('../controllers/teams');

    // TEAMS
    app.route('/teams')
    .get(controllers.get_all_teams)
    .post(controllers.add_team)

    app.route('/teams/:Id')
    .put(controllers.update_team)
    .delete(controllers.delete_team);
};