import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch ,useSelector } from 'react-redux';
import styles from '../styles/sass/Cart.module.scss';
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import OrderDetail from '../components/OrderDetail';
import axios from 'axios';
import { useRouter } from 'next/router';
import { reset } from '../redux/cartSlice';


const Cart = () => {

    const { products, total } = useSelector( state => state.cart );
    const [ open, setOpen ] = useState( false );
    const [ cash, setCash ] = useState( false );
    const router = useRouter();

    // This values are the props in the UI
    const amount = total;
    const currency = "USD";
    const style = {"layout":"vertical"};
    const dispatchRed = useDispatch();

    const createOrder = async( data ) => {
        try {
            const res = await axios.post('http://localhost:3000/api/orders', data);

            res.status === 201 && router.push( '/orders/' + res.data._id );
            dispatchRed( reset() );
        } catch (error) {
            console.log( error )
        }
    }

    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);


        return (<>
                { (showSpinner && isPending) && <div className="spinner" /> }
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function ( details ) {
                            // Your code here after capture the order
                            const shipping = details.purchase_units[ 0 ].shipping;
                            createOrder( { 
                                customer: shipping.name.full_name, 
                                address: shipping.address.address_line_1, 
                                total: total, 
                                method: 1 } )
                        });
                    }}
                />
            </>
        );
    }

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
                {
                    open ? (
                        <div className={ styles.container_right_box_checkoutBtn } >
                            <button 
                                className={ styles.container_right_box_checkoutBtn_cashOnDel }
                                onClick={ () => setCash( true ) }
                            >CASH ON DELIVERY</button>
                            < >
                                <PayPalScriptProvider
                                    options={{
                                        "client-id": "AT74AwOqiaafVj5uw8q0t1E3pzEXf_Q6Ngm0kSNh6mO8EBIFsVFG0MEXXLbGStdEw4SdPLfTCfXkO2Pg",
                                        components: "buttons",
                                        currency: "USD",
                                        "disable-funding":"credit,card,p24"
                                    }}
                                >
                                    <ButtonWrapper
                                        currency={currency}
                                        showSpinner={false}
                                    />
                                </PayPalScriptProvider>
                            </>
                        </div>
                    ) : (

                        <button 
                            className={ styles.container_right_box_checkoutBtn }
                            onClick={ () => setOpen( true ) }
                            disabled= { 0 === products.length }
                        >CHECKOUT NOW!</button>
                    )
                }
                
            </div>
        </div>
        {
            cash && <OrderDetail total={ total } createOrder={ createOrder } setCash={ setCash }  />
        }
    </div>
  )
}

export default Cart