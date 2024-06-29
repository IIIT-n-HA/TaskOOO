const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Explicitly set required for title
      unique: true, // Unique title constraint
    },
    desc: {
      type: String,
      required: true, // Explicitly set required for description
    },
    important: {
      type: Boolean,
      default: false,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);
