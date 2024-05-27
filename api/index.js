import express from "express"
// import mongoose from "mongoose"



// mongoose.connect("mongodb")
const app = express()

app.listen(3000, () => {
    console.log("Server is running on port 3000 and we have added nodemon")
})