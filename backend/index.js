require('dotenv').config(); // Load environment variables from .env file

const express = require("express"); //creating an application ,here express constructor has been used to create an application
const mongoose = require("mongoose");

const bodyParser = require("body-parser"); // body-parser and cors are most important to get the database on the dashboard
const cors = require("cors");

const { HoldingsModel } = require('../backend/model/HoldingsModel');
const { PositionsModel } = require('../backend/model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002; // Server port
const uri = process.env.MONGO_URL; // MongoDB connection URI

const app = express(); // Creating express app instance

app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// Connecting to MongoDB
mongoose.connect(uri)
    .then(() => console.log("✅ DB connected")) // DB connection successful
    .catch(err => console.error("❌ DB connection error:", err));

// Default route to verify backend is working
app.get('/', (req, res) => {
    res.send("✅ Zerodha Backend is Live!");
});

// This will redirect to the React frontend
app.get('/redirect-to-my-react-app', (req, res) => {
    res.redirect('https://zerodha-web-app-dashboard.vercel.app/'); // my-react-app running at Vercel
});

// Get all holdings from database
app.get('/allHoldings', async (req, res) => {
    // find is used to fetch database {} empty set is used to fetch all records
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings); // Send holdings as JSON
});

// Get all positions from database
app.get('/allPositions', async (req, res) => {
    // find is used to fetch all positions data
    let allPositions = await PositionsModel.find({});
    res.json(allPositions); // Send positions as JSON
});

// API to insert new order into the database
app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save(); // Save to MongoDB
    res.send("Order Saved");
});

/*
    ❌ app.listen() should not be used when deploying to Vercel
    ✅ Instead, we check if the file is run directly (for local dev), then start the server.
    ✅ Vercel expects the app to be exported.
*/
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`🚀 App Started at http://localhost:${PORT}`);
    });
}

// Export the app for Vercel (serverless function deployment)
module.exports = app;
