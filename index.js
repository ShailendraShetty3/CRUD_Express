// const express = require('express')
// const mongoose = require('mongoose')
// const Product = require("./models/product.model.js")
// const productRoute = require("./routes/product.route.js")
// const reviewRoute = require("./routes/reviews.route.js")
// const app = express()


// app.use(express.json());
// //for taking input from form type in postman
// app.use(express.urlencoded({ extended: false }));


// //routes
// app.use("/api/products", productRoute);

// app.use("/api/reviews", reviewRoute);


// app.listen(3000, () => {
//     console.log("server is running on port no 3000")
// })


// app.get("/", (req, res) => {
//     res.send("hello from node API server updated");
// })





// // mongoose.connect('mongodb+srv://admin:admin@backenddb.pdxpp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
// //     .then(() => {
// //         console.log('DB Connected!');
// //     })
// //     .catch (() => {
// //         console.log("DB connection failed")
// //     })



// mongoose.connect('mongodb://127.0.0.1:27017/product_crud', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => {
//         console.log('Connected to local MongoDB!');
//     })
//     .catch((err) => {
//         console.error('Error connecting to the database', err);
//     });































const express = require('express');
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route.js");
const reviewRoute = require("./routes/reviews.route.js");
const userRoute = require("./routes/user.route.js");
const socialRoute = require("./routes/social_profile.route.js");
const cartRoute = require("./routes/cart.route.js");
const orderRoute = require("./routes/order.route.js");
const credentialRoute = require("./routes/credential.route.js");
const itemRoute = require("./routes/item.route.js");
const orderLineRoute = require("./routes/order_lines.route.js");
const categoryRoute = require("./routes/category.route.js");

const authRoutes = require("./routes/auth.routes.js");


const setupSwaggerDocs = require('./swagger.js'); // Import the Swagger setup

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Swagger setup
setupSwaggerDocs(app); // Initialize Swagger documentation

// Routes
app.use("/api/products", productRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/user", userRoute);
app.use("/api/social", socialRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);orderLineRoute
app.use("/api/credential", credentialRoute);
app.use("/api/item", itemRoute);
app.use("/api/order_line", orderLineRoute);
app.use("/api/category", categoryRoute);

app.use("/api/auth", authRoutes);


// Root endpoint
app.get("/", (req, res) => {
    res.send("Hello from Node API server updated");
});

// MongoDB connection
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

// Start server
app.listen(3000, () => {
    console.log("Server is running on port no 3000");
});

