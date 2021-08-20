// initialize
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    MenuModel = require('./api/models/models'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/HtmlView', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({
    origin: '*'
}));
var routes = require('./api/routes/routes');
routes(app);

app.listen(port);
console.log(' server started on port ' + port);