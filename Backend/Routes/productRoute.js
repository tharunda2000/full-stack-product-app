import express from 'express';
import Product from '../models/productModel.js'
const router = express.Router();

router.post('/',async (req,res)=>{

    const product = req.body;

    if(!product.name||!product.price||!product.image){
        return res.status(400).json({sucess:false,message:"provide all the fields"});
    }

    const newProduct = new Product(product);

    try{

        await newProduct.save();
        res.status(201).json({sucess:true,data:newProduct})

    }catch(error){

        return res.status(500).json({sucess:false,message:"Server Error"});

    }

})


export default router