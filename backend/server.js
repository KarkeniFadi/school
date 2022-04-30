const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect"); //ou bien require('./config/dbConnect')();
const usersRoute = require("./routes/usersRoute");
const archivesRouter = require("./routes/archivesRoute");
const error = require("./middlewares/errorMiddlewareHandler");
const cors = require('cors')

dotenv.config();

const app = express();
app.use(cors())

//Passing body data
app.use(express.json()); //we want to pass an incoming data as a json file from our app

//connect DB
dbConnect();

//routes
//userRoutes
app.use("/api/users", usersRoute);
//archiveRoutes
app.use("/api/archives", archivesRouter);

//Error middelware
app.use(error.errorMiddlewareHandler);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is up and runing ");
});
