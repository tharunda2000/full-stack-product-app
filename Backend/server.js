import express from 'express'
import dotEnv from 'dotenv'
import connectDB from './config/db.js'
import productRoute from './Routes/productRoute.js'



dotEnv.config()
const app = express()
const PORT = process.env.PORT;

app.use(express.json()); 

app.listen(PORT,()=>{
    connectDB()
    console.log('server running on http://localhost:'+PORT)
})


//Product route
app.use('/product',productRoute)


