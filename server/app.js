global.base_dir = __dirname;
global.abs_path = function (path) {
    return base_dir + path;
}
global._require = function (file) {
    return require(abs_path('/' + file));
}

const express = require('express');
const routesV1 = require('./routes/v1');

const app = express();
const debug = require('debug')('express-sequelize');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const http = require('http');
const models = _require('/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(cookieParser())
app.use(session({
    secret: 'BestTownToGo',
    store: new SequelizeStore({
        db: models.sequelize
    }),
    resave: false,
    proxy: true,
    checkExpirationInterval: 15 * 60 * 1000,
    expiration: 10 * 24 * 60 * 60 * 1000,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});

const server = http.createServer(app);

models.sequelize.sync({
    force: true
}).then(() => {
    server.listen(port, () => {
        debug('Express server listening on port ' + server.address().port);
    });
    server.on('error', onError);
    server.on('listening', onListening);
});

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}


app.use('/api', routesV1)

module.exports = app;