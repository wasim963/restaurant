import Image from 'next/image'
import React from 'react';
import styles from '../styles/sass/Footer.module.scss'

export const Footer = () => {
  return (
    <div className={ styles.container } >
      <div className={ styles.container_item } >
        <Image src='/img/bg.png' layout='fill' alt='' />
      </div>
      <div className={ styles.container_item } >
        <div className={ styles.container_item_card } >
          <h2 className={ styles.container_item_card_motto } >OH YES, WE DID. LAMA PIZZA, WELL BAKED SLICE OF PIZZA. </h2>
        </div>
        <div className={ styles.container_item_card } >
          <h3 className={ styles.container_item_card_title } >FIND OUR RESTAURANTS</h3>
          <p className={ styles.container_item_card_text } >
            1654, R.DON Road #304
            <br/>NEWYORK 850222
            <br/>( 602 ) 867-1010
          </p>
          <p className={ styles.container_item_card_text } >
            1654, R.DON Road #304
            <br/>NEWYORK 850222
            <br/>( 602 ) 867-1010
          </p>
          <p className={ styles.container_item_card_text } >
            1654, R.DON Road #304
            <br/>NEWYORK 850222
            <br/>( 602 ) 867-1010
          </p>
          <p className={ styles.container_item_card_text } >
            1654, R.DON Road #304
            <br/>NEWYORK 850222
            <br/>( 602 ) 867-1010
          </p>
        </div>
        <div className={ styles.container_item_card } >
          <h3 className={ styles.container_item_card_title } >Working Hours</h3>
          <p className={ styles.container_item_card_text } >
            MONDAY UNTIL FRIDAY
            <br/>9:00 - 22:00
          </p>
          <p className={ styles.container_item_card_text } >
            SATURDAY - SUNDAY
            <br/>12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}
