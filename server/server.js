require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const workoutRoutes = require("./routes/workouts");

// Creates an express app and stores in app constant
const app = express();

// middleware

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db, and listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });











// listen for requests in a port

// root of the domain fires the function to handle the get request
// routes
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to the app" });
// });

// app.post("/", (req, res) => {
//   res.json({ msg: "Hello from post request" });
// });
