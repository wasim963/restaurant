import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/sass/Featured.module.scss'

const Featured = () => {

    const [slideNumber, setSlideNumber] = useState( 0 );
    const images = [
        '/img/featured.png',
        '/img/featured2.png',
        '/img/featured3.png'
    ]

    const handleArrow = ( dir ) => {
        if( dir === 'l' ) {
            setSlideNumber( slideNumber == 0 ? 2 : slideNumber - 1 );
        } else {
            setSlideNumber( slideNumber == 2 ? 0 : slideNumber + 1 );
        }
    }

  return (
    <div className={ styles.container } >
        <div className={ styles.container_arrow } style={{ left: '0' }} onClick={ () => handleArrow('l') } >
            <Image src='/img/arrowl.png' alt='' layout='fill' />
        </div>
        <div className={ styles.container_wrapper } style={{ transform: `translateX(${-slideNumber * 100}vw)` }} >
            {
                images.map( ( img, i ) => (
                    <div className={ styles.container_wrapper_imgContainer } key={ i } >
                        <Image src={ img } layout='fill' alt='' objectFit='contain' />
                    </div>
                ) ) 
            }
        </div>
        <div className={ styles.container_arrow } style={{ right: '0' }} onClick={ () => handleArrow('r') } >
            <Image src='/img/arrowr.png' alt='' layout='fill' />
        </div>
    </div>
  )
}

export default Featured