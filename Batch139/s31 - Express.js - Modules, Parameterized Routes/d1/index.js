
const express = require("express");
const app = express();
const PORT = 4000;
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes.js")

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://admin:admin@batch139.rfagb.mongodb.net/s31?retryWrites=true&w=majority', 
	{useNewUrlParser: true, useUnifiedTopology: true}
)

const db = mongoose.connection;
db.on("error", () => console.error(`Connection failed!`));
db.once("open", () => console.log(`Connected to database`))

//Schema

//Model


//Routes
	//receive requests
	//send back responses
app.use("/api/", userRoutes);



app.listen(PORT, () => console.log(`Server running at port ${PORT}`))