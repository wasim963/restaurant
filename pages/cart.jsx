import Image from 'next/image'
import React from 'react'
import styles from '../styles/sass/Cart.module.scss'

const Cart = () => {
  return (
    <div className={ styles.container } >
        <div className={ styles.container_left } >
            <table className={ styles.container_left_table } >
                <tr className={ styles.container_left_table_headingTr } >
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                {
                    [1, 2, 3, 4, 5].map( ( item, index ) => (
                        <tr key={index} className={ styles.container_left_table_dataTr } >
                            <td className={ styles.container_left_table_dataTr_td } style={{ display:'flex', justifyContent:'center' }} >
                                <div className={ styles.container_left_table_dataTr_td_imgContainer } >
                                    <Image src='/img/pizza.png' objectFit='contain' layout='fill' alt='' />
                                </div>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                            <span className={ styles.container_left_table_dataTr_td_name } >CORALZO</span>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                                <span className={ styles.container_left_table_dataTr_td_ingred } >Double Ingredients, Spicy Sauce</span>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                                <span className={ styles.container_left_table_dataTr_td_price } >$19.90</span>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                                <span className={ styles.container_left_table_dataTr_td_quantity } >2</span>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                                <span className={ styles.container_left_table_dataTr_td_total } >$39.80</span>
                            </td>
                        </tr>
                    ) )
                }
            </table>
        </div>
        <div className={ styles.container_right } >
            <div className={ styles.container_right_box } >
                <h1>CART TOTAL</h1>
                <p className={ styles.container_right_box_amounts } >
                    <span><b>Subtotal</b>: $79.40</span><br/>
                    <span><b>Discount</b>: $0.00</span><br/>
                    <span><b>Total</b>: $79.40</span>
                </p>
                <button className={ styles.container_right_box_checkoutBtn } >CHECKOUT NOW!</button>
            </div>
        </div>
    </div>
  )
}

export default Cart