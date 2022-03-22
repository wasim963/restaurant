import Image from 'next/image';
import React from 'react';
import styles from '../styles/sass/Navbar.module.scss'

export const Navbar = () => {
  return (
    <div className={ styles.container } >
        <div className={ styles.container_left }>
            <div className={ styles.container_left_callButton }>
                <Image src='/img/telephone.png' objectFit='contain' width='30' height='30' alt='' />
            </div>
            <div className={ styles.container_left_texts } >
                <div className={ styles.container_left_texts_item }  >ORDER NOW!</div>
                <div className={ styles.container_left_texts_item }  >012 345 678</div>
            </div>
        </div>
        <div className={ styles.container_mid }>
            <ul className={ styles.container_mid_list }  >
                <li className={ styles.container_mid_list_item } >Homepage</li>
                <li className={ styles.container_mid_list_item }>Products</li>
                <li className={ styles.container_mid_list_item }>Menu</li>
                <li className={ styles.container_mid_list_item }>
                    <Image src='/img/logo.png' alt='' height='100' width='100'  />
                </li>
                <li className={ styles.container_mid_list_item }>Events</li>
                <li className={ styles.container_mid_list_item }>Blog</li>
                <li className={ styles.container_mid_list_item }>Contact</li>
            </ul>
        </div>
        <div className={ styles.container_right }>
            <div className={ styles.container_right_cart } >
                <Image src='/img/cart.png' objectFit='contain' width='50' height='50' alt='' />
                <div className={ styles.container_right_cart_counter }>2</div>
            </div>
        </div>
    </div>
  )
}
