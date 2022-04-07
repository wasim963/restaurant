import React from 'react';
import styles from '../styles/sass/OrderDetail.module.scss'

function OrderDetail( { setCash  } ) {
  return (
    <div className={ styles.container } >
        <div className={ styles.container_wrapper } >
            <span onClick={() => setCash( false )} className={ styles.container_wrapper_close } >X</span>
            <h1 className={ styles.container_wrapper_title } >You will pay $12 after deleivery</h1>
            <div className={ styles.container_wrapper_item} >
                <label className={ styles.container_wrapper_item_label }  htmlFor='name' >Name</label>
                <input className={ styles.container_wrapper_item_input }  type='text' id='name' />
            </div>
            <div className={ styles.container_wrapper_item } >
                <label className={ styles.container_wrapper_item_label } htmlFor='phone' >Phone Number</label>
                <input className={ styles.container_wrapper_item_input } type='text' id='phone' />
            </div>
            <div className={ styles.container_wrapper_item } >
                <label className={ styles.container_wrapper_item_label } htmlFor='address' >Name</label>
                <textarea className={ styles.container_wrapper_item_textarea } type='text' id='address' />
            </div>
            <button
                className={ styles.container_wrapper_orderBtn }
            >Order</button>
        </div>
    </div>
  )
}

export default OrderDetail