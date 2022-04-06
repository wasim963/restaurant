import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/sass/PizzaCard.module.scss'

const PizzaCard = ( { pizza } ) => {
  return (
    <div className={ styles.container } >
        <div className={ styles.container_imgContainer } >
          <Link href={ `/product/${ pizza._id }` } passHref >
            <Image src={ pizza.image } alt='' width='500' height='500' />
          </Link>
        </div>
        <h3 className={ styles.container_title  } >{ pizza.title }</h3>
        <span className={ styles.container_price } > { pizza.prices[ 0 ] } </span>
        <p className={ styles.container_desc } >
          { pizza.desc }
        </p>
    </div>
  )
}

export default PizzaCard