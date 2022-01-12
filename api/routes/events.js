'use strict';

module.exports = function(app) {
    var controllers = require('../controllers/events');

    // EVENTS
    app.route('/events')
    .post(controllers.add_event)

    app.route('/events/:menuId')
    .get(controllers.get_all_events);

    app.route('/events/:Id')
    .put(controllers.update_event)
    .delete(controllers.delete_event);
};