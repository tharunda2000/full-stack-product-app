import express from 'express';
import Product from '../models/productModel.js'
const router = express.Router();
import mongoose from 'mongoose'
import { deleteProduct, getAllProducts, getProduct, postProduct, updateProduct } from '../Controller/productController.js';


//post method

router.post('/',postProduct)

// delete methid

router.delete('/:id',deleteProduct)

//Get a product method

router.get("/:id",getProduct)

//Get all products method

router.get('/', getAllProducts)

//Update a product method

router.put('/:id', updateProduct)


export default router