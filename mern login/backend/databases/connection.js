import mongoose from "mongoose";

const database_url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/user_master"


mongoose.connect(database_url)
    .then(() => console.log("connected succesfully"))
    .catch((err) => console.log(err));


export default mongoose