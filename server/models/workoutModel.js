const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    // info about when object was created and updated
  }
);

// Model : to apply the schema to a particular model and use it to interact with the collection

module.exports = mongoose.model("Workout", workoutSchema);
