import Product from '../../../model/Product';
import dbConnect from '../../../util/mongo'

export default async function handler(req, res) {
    const { method, body, cookies } = req;

    const token = cookies.token;


    dbConnect();

    if( 'GET' === method ) {
        try {
            const products = await Product.find();
            return res.status( 200 ).json( products )
        } catch (error) {
            return res.status( 500 ).json( error )
        }
    } else if( 'POST' === method ) {

        console.log('_____________Cookies -Token_____________', token );
        console.log('_____________Process - Env -Token_____________', process.env.TOKEN );

        if( !token || token !== process.env.TOKEN ) {
            return res.status( 401 ).json(' Not Authenticated! ');
        }
        try {
            const product = await Product.create( body );
            return res.status( 201 ).json( product )
        } catch (error) {
            return res.status( 500 ).json( error )
        }
    }
}