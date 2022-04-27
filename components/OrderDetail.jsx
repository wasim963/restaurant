import React, { useState } from 'react';
import styles from '../styles/sass/OrderDetail.module.scss'

function OrderDetail( { total, createOrder, setCash  } ) {

    const [customer, setCustomer] = useState( '' );
    const [ address, setAddress ] = useState( '' );

    const handelOrder = async () => {
        await createOrder( { customer, address, total, method: 0  } );
        setCash( false )
    }


  return (
    <div className={ styles.container } >
        <div className={ styles.container_wrapper } >
            <span onClick={ () => setCash( false ) } className={ styles.container_wrapper_close } >X</span>
            <h1 className={ styles.container_wrapper_title } >You will pay $12 after deleivery</h1>
            <div className={ styles.container_wrapper_item} >
                <label className={ styles.container_wrapper_item_label }  htmlFor='name' >Name</label>
                <input 
                    className={ styles.container_wrapper_item_input }
                    placeholder='John Doe'
                    type='text'
                    id='name'
                    onChange={ ( e ) => setCustomer( e.target.value ) }
                />
            </div>
            <div className={ styles.container_wrapper_item } >
                <label className={ styles.container_wrapper_item_label } htmlFor='phone' >Phone Number</label>
                <input className={ styles.container_wrapper_item_input } type='text' id='phone' />
            </div>
            <div className={ styles.container_wrapper_item } >
                <label className={ styles.container_wrapper_item_label } htmlFor='address' >Name</label>
                <textarea 
                    className={ styles.container_wrapper_item_textarea }
                    placeholder='Please enter your address...'
                    type='text'
                    id='address'
                    onChange={ ( e ) => setAddress( e.target.value ) }
                />
            </div>
            <button
                className={ styles.container_wrapper_orderBtn }
                onClick = { handelOrder }
            >Order</button>
        </div>
    </div>
  )
}

export default OrderDetail