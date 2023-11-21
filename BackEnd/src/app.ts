import * as express from "express"
import { Request, Response } from "express"
import * as cors from "cors"
import bp = require('body-parser');


import { myDataSource } from "./app-data-source"
var cookieParser = require('cookie-parser');

var routeEmployees = require('./routes/route.Employess');
var routeequipements = require('./routes/route.equipements');
// var routeTransactions=require('./routes/route.Transactions');
var routeAuth = require('./routes/route.authentification');

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}));

// const connectToDatabase = require('./config/dbtypeorm');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.get('/test', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });
app.use('/api',routeEmployees);
app.use('/api',routeequipements);
// app.use('/api',routeTransactions);
app.use('/api',routeAuth);
app.listen(3700, () => {console.log("Server is running on port 3700")});
