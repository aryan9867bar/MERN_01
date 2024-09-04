const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser"); 
const app = express();

dotenv.config({path:"./.env"});
require("./db/conn");
// const User = require("./model/userSchema");

app.use(express.json());
app.use(cookieParser());

app.use(require("./router/auth"));

const PORT = process.env.PORT;

// const middleware = (req, res, next) => {
//     console.log(`Hello my Middleware`);
//     next();
// }


app.get("/", (req, res) => {
    res.send("Hello world from the server");
});

// app.get("/about", middleware, (req, res) => {
//     res.send("Hello world from the server");
// });

// app.get("/contact", (req, res) => {
//     res.send("Hello world from the server");
// });

// app.get("/signin", (req, res) => {
//     res.send("Hello world from the server");
// });

app.get("/signup", (req, res) => {
    res.send("Hello world from the server");
});

app.listen(PORT, () => {
    console.log(`Server is running at port no. ${PORT}`);
})