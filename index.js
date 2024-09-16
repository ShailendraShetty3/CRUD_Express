const express = require('express')
const mongoose = require('mongoose')
const Product = require("./models/product.model.js")
const productRoute = require("./routes/product.route.js")
const app = express()


app.use(express.json());
//for taking input from form type in postman
app.use(express.urlencoded({ extended: false }));


//routes
app.use("/api/products", productRoute);


app.listen(3000, () => {
    console.log("server is running on port no 3000")
})


app.get("/", (req, res) => {
    res.send("hello from node API server updated");
})





// mongoose.connect('mongodb+srv://admin:admin@backenddb.pdxpp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
//     .then(() => {
//         console.log('DB Connected!');
//     })
//     .catch (() => {
//         console.log("DB connection failed")
//     })



mongoose.connect('mongodb://127.0.0.1:27017/product_crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to local MongoDB!');
    })
    .catch((err) => {
        console.error('Error connecting to the database', err);
    });
