const express = require("express");
require("dotenv").config();
const connectDB = require("./conn/conn.js");
const User = require("./models/user");
const app = express();
app.use(express.json());
const Books = require("./models/book");
const Favourite = require("./routes/favourite");


// routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);

// Creating port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});


