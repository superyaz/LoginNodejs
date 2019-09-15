const express = require('express');

var app = express();


app.get('/', (req, res) => {
    res.send('Bienvenido login by @superyaz');
});

app.use("/api", require("./userRoutes"));

module.exports = app;