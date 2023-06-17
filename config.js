const mongoose=require("mongoose")

const dbConnection=async()=>{
   await mongoose.connect("mongodb+srv://arslan:arslan12345@crud.izdbdth.mongodb.net/test2")
    .then(()=>{
        console.log("Mongodb Connected")
    })
    .catch((error)=>{
        console.error("Error connecting mongodb!")
    })
}


module.exports=dbConnection;