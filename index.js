import Express from "express";
import mongoose from "mongoose";
import db from './config/mongoose.js'
import ejs from 'ejs'
import path from 'path'
import { home } from "./controller/homeController.js";
import Router from "./routes/index.js";

    import { fileURLToPath } from "url";
    const __fileName = fileURLToPath(import.meta.url)
    const __dirname=path.dirname(__fileName);

const PORT=8001

//<-----  Firmwares  ----->
const app=Express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(Express.urlencoded({extended:false}))
//using routes
app.use('/',Router)


// <-------    server Listening ------->

app.listen(PORT, (err)=>{
    if(err)
        console.log("Error Occured",err.message)
    console.log(`Server running at port ${PORT}`)
})