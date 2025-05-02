const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/elearning");
    console.log("Connect successfully!!!");
  } catch (error) {
    console.error(error);
  }
}

async function disconnect() {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from database");
  } catch (error) {
    console.error("Error disconnecting from database:", error);
    throw error;
  }
}

module.exports = { connect, disconnect };
