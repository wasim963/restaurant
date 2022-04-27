import React from 'react'
import Image from 'next/image'
import styles from '../../styles/sass/Order.module.scss'
import axios from 'axios';

const Order = ( { order } ) => {

    const status = order.status;
    const statusClass = ( index ) => {
        if( index - status < 1 ) {
            return styles.done
        }else if( index - status === 1 ) {
            return styles.inProgress
        } else if( index - status > 1 ) {
            return styles.undone
        }
    }
  return (
    <div className={ styles.container } >
        <div className={ styles.container_left } >
          <div className={ styles.container_left_row } >
            <table className={ styles.container_left_row_table } >
                <thead>
                    <tr className={ styles.container_left_row_table_headingTr } >
                        <th className={ styles.container_left_row_table_headingTr_th } >Order ID</th>
                        <th className={ styles.container_left_row_table_headingTr_th } >Customer</th>
                        <th className={ styles.container_left_row_table_headingTr_th } >Address</th>
                        <th className={ styles.container_left_row_table_headingTr_th } >Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={ styles.container_left_row_table_dataTr } >
                        <td className={ styles.container_left_row_table_dataTr_td } >
                        <span className={ styles.container_left_row_table_dataTr_td_orderId } >{ order._id }</span>
                        </td>
                        <td className={ styles.container_left_row_table_dataTr_td } >
                            <span className={ styles.container_left_row_table_dataTr_td_name } >{ order.customer }</span>
                        </td>
                        <td className={ styles.container_left_row_table_dataTr_td } >
                            <span className={ styles.container_left_row_table_dataTr_td_address } >{ order.address } </span>
                        </td>
                        <td className={ styles.container_left_row_table_dataTr_td } >
                            <span className={ styles.container_left_row_table_dataTr_td_total } >${ order.total }</span>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
          <div className={ styles.container_left_row } >
              <div className={ statusClass( 0 ) } >
                  <Image src='/img/paid.png' width={ 30 } height={ 30 }  alt='' />
                  <span>Payment</span>
                  <div className={ styles.checkedIcon } >
                      <Image className={ styles.checkedIcon } src='/img/checked.png' width={ 20 } height={ 20 } alt='' />
                  </div>
              </div>
              <div className={ statusClass( 1 ) } >
                  <Image src='/img/bake.png' width={ 30 } height={ 30 } alt='' />
                  <span>Preparing</span>
                  <div className={ styles.checkedIcon } >
                      <Image className={ styles.checkedIcon } src='/img/checked.png' width={20} height={ 20 } alt='' />
                  </div>
              </div>
              <div className={ statusClass( 2 ) } >
                  <Image src='/img/bike.png' width={ 30 } height={ 30 } alt='' />
                  <span>On the way</span>
                  <div className={ styles.checkedIcon } >
                      <Image className={ styles.checkedIcon } src='/img/checked.png' width={20} height={20} alt='' />
                  </div>
              </div>
              <div className={ statusClass( 3 ) } >
                  <Image src='/img/delivered.png' width={ 30 } height={ 30 } alt='' />
                  <span>Delivered</span>
                  <div className={ styles.checkedIcon } >
                      <Image className={ styles.checkedIcon } src='/img/checked.png' width={20} height={20} alt='' />
                  </div>
              </div>
          </div>
        </div>
        <div className={ styles.container_right } >
            <div className={ styles.container_right_box } >
                <h1>CART TOTAL</h1>
                <p className={ styles.container_right_box_amounts } >
                    <span><b>Subtotal</b>: ${ order.total }</span><br/>
                    <span><b>Discount</b>: $0.00</span><br/>
                    <span><b>Total</b>: ${ order.total }</span>
                </p>
                <button className={ styles.container_right_box_checkoutBtn } >PAID</button>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async( { params } ) => {
    const res = await axios.get( `http://localhost:3000/api/orders/${ params.id }`  );

    return {
        props: {
            order: res.data
        }
    }
}

export default Order