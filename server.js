const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require(mongoose);


const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  //this is bundling our software (see package.json "build") and will put it underneath directory called client and imbedded directory called build
}


// Define API routes here
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//SSR - server side rendering
//serve up that server bundle!!

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
