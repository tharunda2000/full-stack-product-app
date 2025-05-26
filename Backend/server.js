import express from 'express'
import dotEnv from 'dotenv'
import connectDB from './config/db.js'
import productRoute from './Routes/productRoute.js'


dotEnv.config()
const app = express()


app.listen(5000,()=>{
    connectDB()
    console.log('server running on port 5000...')
})

app.get('/',(req,res)=>{
    res.send('server is reddy')
})

//Product route
app.use('/product',productRoute)


