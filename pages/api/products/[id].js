import Product from "../../../model/Product";
import axios from "axios";

export default async function handler(req, res) {

    const { query, method } = req;
    if( 'GET' === method ) {
        try {
            const product = await Product.findById( query.id );
            res.status( 200 ).json( product )
        } catch (error) {
            res.status(500).json( error )
        }
    } else if( 'PUT' === method ) {
        // try {
        //     const product = await Product.findById( query.id );
        //     res.status( 200 ).json( product )
        // } catch (error) {
        //     res.status(500).json( error )
        // }
    } else if( 'DELETE' === method ) {
        try {
            await Product.findByIdAndDelete( query.id );
            res.status( 200 ).json( 'Product Deleted!' )
        } catch (error) {
            res.status(500).json( error )
        }
    }
  }
  