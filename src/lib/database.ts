import mongoose from "mongoose";

export default async function connectDb() {
    const uri = process.env.MONGODB_URI
    if(!uri) throw new Error("Messing MONGODB_URI")
    if(mongoose.connection.readyState === 1) {
        return await mongoose.connection.asPromise();
    } else {
        return await mongoose.connect(uri)
    }

}