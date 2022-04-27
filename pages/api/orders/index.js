import Order from "../../../model/Order";
import dbConnect from '../../../util/mongo'

const handler = async( req, res ) => {
    const { method, query: { id } } = req;

    dbConnect();

    if( 'GET' === method ) {

        try {
            const orders = await Order.find();
            return res.status( 200 ).json( orders )
        } catch (error) {
            return res.status( 500 ).json( error )
        }

    } else if( 'POST' === method ) {

        try {
            const order = await Order.create( req.body );
            return res.status( 201 ).json( order )
        } catch (error) {
            return res.status( 500 ).json( error )
        }

    }
}

export default handler