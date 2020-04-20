const express = require("express");
const path = require ("path")
const PORT = process.env.PORT || 3001;  // Connect to the Mongo DB Step 1
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use('/',routes);

app.use(express.static(path.join(__dirname, 'client/build')))

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// Connect to the Mongo DB Step 2
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/toolbox");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
