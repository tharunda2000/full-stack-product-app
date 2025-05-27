import express from 'express'
import dotEnv from 'dotenv'
import connectDB from './config/db.js'
import productRoute from './Routes/productRoute.js'



dotEnv.config()
const app = express()

app.use(express.json()); 

app.listen(5000,()=>{
    connectDB()
    console.log('server running on port 5000...')
})


//Product route
app.use('/product',productRoute)


