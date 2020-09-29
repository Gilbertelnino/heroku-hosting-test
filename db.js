const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to mongoDB on host ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
