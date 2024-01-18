require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const blogroutes = require('./routes/Blog')
const userroutes = require('./routes/user')

const app = express();




//middleware
app.use(express.json())
app.use((req,res,next)=> {
    next()
})
app.use('/api/blog',blogroutes);
app.use('/api/user',userroutes)


//connecct DB
 mongoose.connect(process.env.MONGO_URI)
 .then(()=> {
    app.listen(process.env.PORT,()=>{
        console.log("listening")
        console.log('db connected')
    })
    })
    .catch((error) => {
        console.log(error)
    })
    
// app.listen(process.env.PORT,()=>{
//     console.log("listening")
   
// })

