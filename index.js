const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send("Hello from Node API Server updated");

});


mongoose.connect("mongodb+srv://janiduhimansawelarathna:UDEZfONpJ0xoA7eZ@backenddb.hqke3e6.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    //use your database link to connect the mongo DB
.then(()=>{
    console.log("connected to database!");
    app.listen(3000, ()=>{
        console.log("server is running on port 3000");
    });
})
.catch(()=>{
    console.log("connection failed!");
});
