import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema( {
    title:{
        type: String,
        required: true,
        maxlength: 50
    },
    desc:{
        type: String,
        required: true,
        maxlength: 200
    },
    image:{
        type: String,
        required: true,
        maxlength: 200
    },
    prices:{
        type: [ Number ],
        required: true
    },
    extraOptions:{
        type: [
            {
                text: {
                    type: String,
                    required: true,
                    maxlength: 50
                },
                price: {
                    type: Number,
                    required: true
                }
            }
        ],
        required: true
    }
}, { timestamps: true } );

export default mongoose.models.Product || mongoose.model( 'Product', ProductSchema );