const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// this should be saved in a database to maintain a stateless server
let playlist = [];

app.post('/api/addVideo', (req, res) => {
    const url = req.query.url;

    if (url) {
        playlist.push(url);
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ playlist }));
});

app.post('/api/removeVideo', (req, res) => {
    const url = req.query.url;

    const index = playlist.findIndex(item => item === url);
    if (index > -1) {
        playlist.splice(index, 1);
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ playlist }));
});

app.post('/api/videoEnded', (req, res) => {
    if (playlist[0] === req.query.url) {
        playlist.splice(0, 1);
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ playlist }));
});


app.get('/api/playlist', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ playlist }));
});

app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
);