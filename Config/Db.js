const mongoose = require("mongoose");




async function DbConnection(){
   
    const connectionDB = await mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: true, // ← allow certs that aren't trusted (not recommended for production)
})
    if(connectionDB)  console.log("MONGO DB ATLAS IS CONNECTED SUCCESSFULLY")

    }


module.exports = {DbConnection}
