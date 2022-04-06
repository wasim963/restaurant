import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/sass/Product.module.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/cartSlice';

const Product = ( { pizza } ) => {
    const [ size, setSize ] = useState( 0 );
    const [ price, setPrice ] = useState( pizza.prices[ 0 ] );
    const [ extras, setExtras ] = useState( [] );
    const [ quantity, setQuantity ] = useState( 1 );

    const dispatch = useDispatch();

    const changePrice = ( index ) => {
    
        const diff = price - pizza.prices[ size ];
        setSize( index );
        setPrice( diff + pizza.prices[ index ] );
    }

    const handleChange = ( e, option ) => {
        const checked = e.target.checked;

        if( checked ) {
            setPrice( prevPrice => prevPrice + option.price );
            setExtras( prev => [ ...prev, option ] );
        } else {
            setPrice( prevPrice => prevPrice - option.price );
            setExtras( extras.filter( extra => extra._id !== option._id  ) )
        }
    }

    const handleAddToCart = ( e ) => {
        dispatch( addProduct( { ...pizza,  price, quantity, extras } ) )
    }

  return (
    <div className={ styles.container } >
        <div className={ styles.container_left } >
            <div className= { styles.container_left_imgContainer } >
                <Image src={ pizza.image } objectFit='contain' layout='fill' alt=''  />
            </div>
        </div>
        <div className={ styles.container_right } >
            <h1 className={ styles.container_right_name } >{ pizza.title }</h1>
            <span className={ styles.container_right_price } > ${ price } </span>
            <p className={ styles.container_right_desc } > { pizza.desc } </p>
            <h3 className={ styles.container_right_choose} >Choose the size</h3>
            <div className={ styles.container_right_sizes } >
                <div className={ styles.container_right_sizes_size } onClick={ () => changePrice( 0 ) }  >
                    <Image src='/img/size.png' layout='fill' alt=''  />
                    <span className={ styles.container_right_sizes_size_number } >Small</span>
                </div>
                <div className={ styles.container_right_sizes_size } onClick={ () => changePrice( 1 ) } >
                    <Image src='/img/size.png' layout='fill' alt=''  />
                    <span className={ styles.container_right_sizes_size_number } >Medium</span>
                </div>
                <div className={ styles.container_right_sizes_size } onClick={ () => changePrice( 2 ) } >
                    <Image src='/img/size.png' layout='fill' alt=''  />
                    <span className={ styles.container_right_sizes_size_number } >Large</span>
                </div>
            </div>
            <h3 className={ styles.container_right_titleIngred } >Choose Additional Ingredients</h3>
            <div className={ styles.container_right_ingredients } >
                {
                    pizza.extraOptions.map( option => (             
                        <div key={ option._id } className={ styles.container_right_ingredients_option } >
                            <input 
                                className={ styles.container_right_ingredients_option_checkbox }
                                type='checkbox' 
                                id={ option.text }
                                name= { option.text }
                                onChange= { e => handleChange( e, option ) }
                            />
                            <label 
                                htmlFor={ option.text }
                                className={ styles.container_right_ingredients_option_label } 
                            >{ option.text }</label>
                        </div>
                    ))
                }
            </div>
            <div className={ styles.container_right_add } >
                <input 
                    type='number'
                    value={ quantity }
                    onChange={ e => setQuantity( e.target.value ) }
                    className={ styles.container_right_add_quantity } 
                />
                <button 
                    className={ styles.container_right_add_button }
                    onClick={ handleAddToCart }
                >Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ( { params } ) => {
    const res = await axios.get(`http://localhost:3000/api/products/${ params.id }`);
  
    return {
      props: {
        pizza: res.data
      }
    }
  }

export default Product;