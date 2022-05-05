//import express module
const express = require("express");

//import mongoose module
const mongoose = require("mongoose");

//express server
const app = express();

//local port and available port after project hosted in heroku
const PORT = process.env.PORT || 4000;

//after exporting  router module, import it to index.js file
const userRoutes = require("./routes/userRoutes");

const taskRoutes = require("./routes/taskRoutes");


//mongodb connection
mongoose.connect('mongodb+srv://admin:admin@batch139.axzmg.mongodb.net/s31?retryWrites=true&w=majority', 
	{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('eror', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to Database'));

//Middleware

//helps express to understand json payloads
app.use(express.json())

//helps express to understand json payloads
//json payloads come from forms and tables
app.use(express.urlencoded({extended:true}))

//Routes

    // Root url:
        // http://localhost:4000/api/users
        // http://localhost:4000/api/tasks

//middleware that passes all request to userRoutes module
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))