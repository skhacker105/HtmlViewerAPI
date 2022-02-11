// initialize
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    auth = require('./api/authorization/authorize-middleware'),
    cors = require('cors'),
    cookieParser = require('cookie-parser'),
    routes = require('./api/routes/routes'),
    dotenv = require('dotenv');

dotenv.config();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(cookieParser());
app.use(auth.isAuthorized);

routes(app);

app.listen(port, () => {
    console.log(' server started on port ' + port);
});