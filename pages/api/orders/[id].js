import Order from "../../../model/Order";
import dbConnect from '../../../util/mongo'

const handler = async( req, res ) => {
    const { method, query: { id } } = req;

    dbConnect();

    if( 'GET' === method ) {
        try {
            const order = await Order.findById( id );
            return res.status( 201 ).json( order )
        } catch (error) {
            return res.status( 500 ).json( error )
        }
    } else if( 'PUT' === method ) {
        try {
            const order = await Order.findByIdAndUpdate( id, req.body, { new: true } );
            return res.status( 201 ).json( order )
        } catch (error) {
            return res.status( 500 ).json( error )
        }
    } else if( 'DELETE' === method ) {

    }
}

export default handler;