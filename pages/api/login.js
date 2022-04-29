import cookie from 'cookie'

const handler = async(req, res) => {
    const { method, body } = req;
    const { username, password } = body;

    if( method === 'POST' ) {
        if( username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD ) {
            res.setHeader(     
                'Set-Cookie', 
                cookie.serialize( 'token', process.env.TOKEN, {
                    maxAge: 60 * 60,
                    sameSite: 'strict',
                    path: '/' 
                } )
            )
            res.status( 200 ).json( 'Succesfully Logged In.' );
        } else {
            res.status(400).json( "Wrong Credentials" );
        } 
    }
}

export default handler;