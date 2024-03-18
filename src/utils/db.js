const mongoose = require("mongoose");

const connect = async ()=>{
    try {
        if (mongoose.connections[0].readyState){
            return false;
        }
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
        console.log("Connected!")
    } catch (err){
        console.log("Error => ", err);
    }
}

export default connect;
