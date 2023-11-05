const express = require('express');
var app = express();
const cors=require('cors');
var cookieParser = require('cookie-parser');
const bp = require('body-parser');
const db=require('./config/db');
const routeusers=require('./routes/route.users');
const routeequipements=require('./routes/route.equipements');
const routeTransactions=require('./routes/route.Transactions');
const routeAuth=require('./routes/route.authentification');
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use('/api',routeusers);
app.use('/api',routeequipements);
app.use('/api',routeTransactions);
app.use('/api',routeAuth);
app.listen(3700, () => {console.log("Server is running on port 3700")});
module.exports = app;