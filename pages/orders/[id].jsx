import React from 'react'
import Image from 'next/image'
import styles from '../../styles/sass/Order.module.scss'

const Order = () => {

    const status = 1;
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
                <tr className={ styles.container_left_row_table_headingTr } >
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                {
                  [1].map( ( item, index ) => (
                      <tr key={index} className={ styles.container_left_row_table_dataTr } >
                          <td className={ styles.container_left_row_table_dataTr_td } >
                          <span className={ styles.container_left_row_table_dataTr_td_orderId } >12345654321</span>
                          </td>
                          <td className={ styles.container_left_row_table_dataTr_td } >
                              <span className={ styles.container_left_row_table_dataTr_td_name } >John Doe</span>
                          </td>
                          <td className={ styles.container_left_row_table_dataTr_td } >
                              <span className={ styles.container_left_row_table_dataTr_td_address } >Arrabari 234, 855107 </span>
                          </td>
                          <td className={ styles.container_left_row_table_dataTr_td } >
                              <span className={ styles.container_left_row_table_dataTr_td_total } >$39.80</span>
                          </td>
                      </tr>
                  ) )
                }
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
                    <span><b>Subtotal</b>: $79.40</span><br/>
                    <span><b>Discount</b>: $0.00</span><br/>
                    <span><b>Total</b>: $79.40</span>
                </p>
                <button className={ styles.container_right_box_checkoutBtn } >PAID</button>
            </div>
        </div>
    </div>
  )
}

export default Order