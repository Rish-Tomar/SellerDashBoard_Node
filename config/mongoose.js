import mongoose from "mongoose";
const URL=`mongodb+srv://admin:${'rootroot'}@cluster1.rw2r1os.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(URL)

const db=mongoose.connection

db.on('error',console.error.bind(console,'error connecting to DB'))

db.once('open',()=>{
    console.log('successfully connected to the database')
})

export default db