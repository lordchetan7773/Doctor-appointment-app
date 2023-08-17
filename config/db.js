const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // const url = "mongodb+srv://chetanpanditt48:sahayata@cluster0.krp9ax1.mongodb.net/ssahayatadata?retryWrites=true&w=majority" 
    // const url = "mongodb://127.0.0.1:27017/sahayata-data" 
    // const url = "mongodb+srv://chetanpanditt48:sahayata@cluster0.krp9ax1.mongodb.net/ssahayatadata?retryWrites=true&w=majority" 
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }   
}; 
module.exports = connectDB;
 