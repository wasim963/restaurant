import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from '../../styles/sass/Login.module.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = async( e ) => {
        e.preventDefault();
        setError( false )

        try {
            const res = await axios.post( 'http://localhost:3000/api/login', { username, password } );

            setError( false )
            res.status === 200 && router.push('/admin');
        } catch( err ) {
            setError( true )
        }
    }
  return (
    <div className={ styles.container } >
        <div className={ styles.container_wrapper } >
            <h4 className={ styles.container_wrapper_title } >Admin Dashboard</h4>
            <form className={ styles.container_wrapper_form } onSubmit={ handleSubmit }  action="">
                <div className= { styles.container_wrapper_form_group } >
                    <input 
                        className={ styles.container_wrapper_form_group_input }
                        type='text'
                        placeholder='enter username...' 
                        onChange={e => setUsername( e.target.value )}
                        autoComplete='on'
                    />
                </div>
                <div className= { styles.container_wrapper_form_group } >
                    <input 
                        className={ styles.container_wrapper_form_group_input }
                        type='password'
                        placeholder='enter password...'
                        onChange={e => setPassword( e.target.value )}
                        autoComplete='on'
                    />
                </div>
                <button className={ styles.container_wrapper_form_btn } >Sign In</button>
            </form>
            { error && <span className={ styles.error } > Something went wrong! </span> }
        </div>
    </div>
  )
}

export default Login