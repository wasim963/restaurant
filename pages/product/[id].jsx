import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/sass/Product.module.scss'

const Product = () => {
    const [ size, setSize ] = useState( 0 );

    const pizza = {
        id: 1,
        image: '/img/pizza.png',
        name: 'CAMPAGNOLA',
        price: [ 19.9, 23.9, 27.9 ],
        desc: 'This a description about the pizza available in the restaurant in the cart page. This a description about the pizza available in the restaurant in the cart page'
    }
  return (
    <div className={ styles.container } >
        <div className={ styles.container_left } >
            <div className= { styles.container_left_imgContainer } >
                <Image src={ pizza.image } objectFit='contain' layout='fill' alt=''  />
            </div>
        </div>
        <div className={ styles.container_right } >
            <h1 className={ styles.container_right_name } >{ pizza.name }</h1>
            <span className={ styles.container_right_price } > ${ pizza.price[ size ] } </span>
            <p className={ styles.container_right_desc } > { pizza.desc } </p>
            <h3 className={ styles.container_right_choose} >Choose the size</h3>
            <div className={ styles.container_right_sizes } >
                <div className={ styles.container_right_sizes_size } onClick={ () => setSize( 0 ) }  >
                    <Image src='/img/size.png' layout='fill' alt=''  />
                    <span className={ styles.container_right_sizes_size_number } >Small</span>
                </div>
                <div className={ styles.container_right_sizes_size } onClick={ () => setSize( 1 ) } >
                    <Image src='/img/size.png' layout='fill' alt=''  />
                    <span className={ styles.container_right_sizes_size_number } >Medium</span>
                </div>
                <div className={ styles.container_right_sizes_size } onClick={ () => setSize( 2 ) } >
                    <Image src='/img/size.png' layout='fill' alt=''  />
                    <span className={ styles.container_right_sizes_size_number } >Large</span>
                </div>
            </div>
            <h3 className={ styles.container_right_titleIngred } >Choose Additional Ingredients</h3>
            <div className={ styles.container_right_ingredients } >
                <div className={ styles.container_right_ingredients_option } >
                    <input className={ styles.container_right_ingredients_option_checkbox } type='checkbox' id='double' name='double' />
                    <label htmlFor='double' className={ styles.container_right_ingredients_option_label } >Double Ingredients</label>
                </div>
                <div className={ styles.container_right_ingredients_option } >
                    <input className={ styles.container_right_ingredients_option_checkbox } type='checkbox' id='cheese' name='cheese' />
                    <label htmlFor='cheese' className={ styles.container_right_ingredients_option_label } >Extra Cheese</label>
                </div>
                <div className={ styles.container_right_ingredients_option } >
                    <input className={ styles.container_right_ingredients_option_checkbox } type='checkbox' id='spicy' name='spicy' />
                    <label htmlFor='spicy' className={ styles.container_right_ingredients_option_label } >Spicy Sauce</label>
                </div>
                <div className={ styles.container_right_ingredients_option } >
                    <input className={ styles.container_right_ingredients_option_checkbox } type='checkbox' id='garlic' name='garlic' />
                    <label htmlFor='garlic' className={ styles.container_right_ingredients_option_label } >Galrlic Sauce</label>
                </div>
            </div>
            <div className={ styles.container_right_add } >
                <input type='number' defaultValue='1' className={ styles.container_right_add_quantity } />
                <button className={ styles.container_right_add_button } >Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product