import mongoose from "mongoose"

let alreadydone = false
export default async function ensureDbIsCommected() {
    if (alreadydone){
        console.log("Db already connected")
        return
    }
    alreadydone = true;    
    await mongoose.connect("mongodb+srv://madhavkulkarni1305:rw6s4eysY2CKG9lB@cluster0.7mbyfvf.mongodb.net/", {dbName:"NextappData"});
    console.log("Db connected")
}
