import express from 'express';
import Product from '../models/productModel.js'
import mongoose from 'mongoose'

export const postProduct = async (req,res)=>{

    const product = req.body;

    if(!product.name||!product.price||!product.image){
        return res.status(400).json({success:false,message:"provide all the fields"});
    }

    const newProduct = new Product(product);

    try{

        await newProduct.save();
        res.status(201).json({sucess:true,data:newProduct});

    }catch(error){

        return res.status(500).json({success:false,message:"Server Error"});

    }

}

export const deleteProduct =async (req,res)=>{

    const id =req.params.id;
    
    try{

        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"produt deleted successfully"});

        
    }catch(error){

         res.status(404).json({success:false,message:"produt not found"});

    }


}

export const getProduct = async (req,res)=>{
    const id = req.params.id;

    try{

      const product = await Product.findById(id);
      res.send(product)

    }catch(error){

        res.status(404).json({sucess:false,message:"prodoct not found"})

    }

}

export const getAllProducts = async (req,res)=>{

    try{
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
    }

    catch(error){

        console.log("error in fetching products : ",error.message);
        res.status(500).json({success:false,message:"Server Error"});


    }


}

export const updateProduct = async (req,res)=> {
    const id = req.params.id;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:'invalid product id'})
    }

    try{

        const newProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:newProduct});

    }catch(error){

        res.status(500).json({success:false,message:"Server error"});

    }
}