import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../styles/sass/Cart.module.scss';

const Cart = () => {

    const { products, total } = useSelector( state => state.cart )
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
                    products.map( ( product, index ) => (
                        <tr key={index} className={ styles.container_left_table_dataTr } >
                            <td className={ styles.container_left_table_dataTr_td } style={{ display:'flex', justifyContent:'center' }} >
                                <div className={ styles.container_left_table_dataTr_td_imgContainer } >
                                    <Image src={ product.image } objectFit='contain' layout='fill' alt='' />
                                </div>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                            <span className={ styles.container_left_table_dataTr_td_name } >{ product.title }</span>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                                <span className={ styles.container_left_table_dataTr_td_ingred } >
                                    {
                                        product.extras.map( extra => (
                                            <span key={extra._id} >{ extra.text }, </span>
                                        ) )
                                    }
                                </span>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                                <span className={ styles.container_left_table_dataTr_td_price } >${ product.price }</span>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                                <span className={ styles.container_left_table_dataTr_td_quantity } >{ product.quantity }</span>
                            </td>
                            <td className={ styles.container_left_table_dataTr_td } >
                                <span className={ styles.container_left_table_dataTr_td_total } >${ product.price * product.quantity }</span>
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
                    <span><b>Subtotal</b>: ${ total }</span><br/>
                    <span><b>Discount</b>: $0.00</span><br/>
                    <span><b>Total</b>: ${ total } </span>
                </p>
                <button className={ styles.container_right_box_checkoutBtn } >CHECKOUT NOW!</button>
            </div>
        </div>
    </div>
  )
}

export default Cart