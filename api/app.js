const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cron = require('node-cron');
const axios = require('axios').default;
const writeJSON = require('write-json-file');
const cors = require('cors');

let indexRouter = require('./routes/index');
let earthquakesRouter = require('./routes/earthquakes');

let app = express();

let allowedOrigins = [
    'http://localhost:8080',
    '*'
];
app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            let msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function getLatestEarthquake() {
    axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
        .then(function(response) {
            console.log(response.data.features[0]);
            writeJSON('./tmp/earthquake.latest.json', response.data.features[0]);
        })
        .catch(function(error) {
            console.error(error);
        })
}

getLatestEarthquake();

cron.schedule('* * * * *', () => {
    getLatestEarthquake();
})

app.use('/', indexRouter);
app.use('/earthquakes/latest', earthquakesRouter);

module.exports = app;
