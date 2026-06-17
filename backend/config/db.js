import mongoose from "mongoose";

const connectToDb = async (callback) => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "user-data"
        });
        console.log("Database connected");
        callback();
    }
    catch(err){
        console.error("Failed to connect to Database");
        callback(err);
    }
}

export default connectToDb;