import Image from 'next/image';
import React from 'react';
import styles from '../styles/sass/PizzaCard.module.scss'

const PizzaCard = () => {
  return (
    <div className={ styles.container } >
        <div className={ styles.container_imgContainer } >
            <Image src='/img/pizza.png' alt='' width='500' height='500' />
        </div>
        <h3 className={ styles.container_title  } >FLORI DI ZUCCA</h3>
        <span className={ styles.container_price } >$19.90</span>
        <p className={ styles.container_desc } >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Illum facilis earum ea tempore voluptates iure rem sed quos doloremque voluptas!
        </p>
    </div>
  )
}

export default PizzaCard