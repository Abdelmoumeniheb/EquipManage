"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bp = require("body-parser");
var app_data_source_1 = require("./app-data-source");
var cookieParser = require('cookie-parser');
var routeEmployees = require('./routes/route.Employess');
var routeequipements = require('./routes/route.equipements');
// var routeTransactions=require('./routes/route.Transactions');
var routeAuth = require('./routes/route.authentification');
app_data_source_1.myDataSource
    .initialize()
    .then(function () {
    console.log("Data Source has been initialized!");
})
    .catch(function (err) {
    console.error("Error during Data Source initialization:", err);
});
var app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
// const connectToDatabase = require('./config/dbtypeorm');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.get('/test', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.use('/api', routeEmployees);
app.use('/api', routeequipements);
// app.use('/api',routeTransactions);
app.use('/api', routeAuth);
app.listen(3700, function () { console.log("Server is running on port 3700"); });
