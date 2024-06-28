const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    if (response) {
      console.log("connected to DB");
    }
  } catch (error) {
    console.log(error);
  }
};

connectDB();
