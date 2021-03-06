const express = require('express');
const http = require('http');
const path = require('path');
const apiRouter = require('./api-router');

const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + '/../dist/CondorCorridor'));

app.use('/', (req, res) => res.sendFile(path.join(__dirname)));
app.use('/', apiRouter);
app.use('/', (req, res) => res.redirect('/'));

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on port: ${port}`));