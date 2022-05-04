import Product from "../../../model/Product";

export default async function handler(req, res) {

    const { query, method, cookies } = req;

    const token = cookies.token;

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
        if( !token || token!== process.env.TOKEN ) {
            return res.status(401).json( 'Not Authenticated' );
        }
        try {
            await Product.findByIdAndDelete( query.id );
            res.status( 200 ).json( 'Product Deleted!' )
        } catch (error) {
            res.status(500).json( error )
        }
    }
  }
  