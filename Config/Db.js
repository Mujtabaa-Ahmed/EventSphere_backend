const mongoose = require("mongoose");




async function DbConnection(){
   
    const connectionDB = await mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: false, // only true if you're using self-signed certs
  tlsInsecure: false})
    if(connectionDB)  console.log("MONGO DB ATLAS IS CONNECTED SUCCESSFULLY")

    }


module.exports = {DbConnection}
