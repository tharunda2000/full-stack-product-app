import mongoose from 'mongoose';

const productSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },catagory:{
        type:String,
        required:true,
    },brand:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        required:true,
    },},{

        timestamps:true
    
    

});

const Product = mongoose.model('Product',productSchema);

export default Product;