import Order from "../../../model/Order";
import dbConnect from '../../../util/mongo'

const handler = async( req, res ) => {
    const { method, cookies, query: { id } } = req;

    dbConnect();
    const token = cookies.token;

    if( 'GET' === method ) {
        try {
            const order = await Order.findById( id );
            return res.status( 201 ).json( order )
        } catch (error) {
            return res.status( 500 ).json( error )
        }
    } else if( 'PUT' === method ) {
        if( !token || token!== process.env.TOKEN ) {
            return res.status(401).json( 'Not Authenticated' );
        }
        try {
            const order = await Order.findByIdAndUpdate( id, req.body, { new: true } );
            return res.status( 201 ).json( order )
        } catch (error) {
            return res.status( 500 ).json( error )
        }
    } else if( 'DELETE' === method ) {
        if( !token || token!== process.env.TOKEN ) {
            return res.status(401).json( 'Not Authenticated' );
        }
        try {
            const order = await Order.findByIdAndDelete( id );
            return res.status( 200 ).json( order )
        } catch (error) {
            return res.status( 500 ).json( error )
        }
    }
}

export default handler;