const mongoose = require("mongoose");




async function DbConnection(){
   
    const connectionDB = await mongoose.connect(process.env.MONGODB_URI, {
  tls: true,
  tlsAllowInvalidCertificates: true // or false depending on your setup
})
    if(connectionDB)  console.log("MONGO DB ATLAS IS CONNECTED SUCCESSFULLY")

    }


module.exports = {DbConnection}
