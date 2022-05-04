import axios from 'axios';
import React, { useState } from 'react';
import styles from '../styles/sass/Add.module.scss';

const Add = ( { setClose } ) => {
    const [file, setFile ] = useState( null );
    const [ title, setTitle ] = useState( '' );
    const [ desc, setDesc ] = useState( '' );
    const [ prices, setPrices ] = useState( [] );
    const [ extraOptions, setExtraOptions ] = useState( [] );
    const [ extra, setExtra ] = useState( null );

    const handleChangePrices = ( e, index ) => {
        const currentPrices = prices;
        currentPrices[ index ] = parseInt( e.target.value ); 
        setPrices( currentPrices )
    }

    const handleExtraInput = e => {
        const name = [ e.target.name ];
        setExtra( { ...extra, [ e.target.name ]: e.target.name === 'text' ? e.target.value : parseInt( e.target.value ) }  )
    }

    const handleExtras = () => {
        setExtraOptions( prev => [ ...prev, extra ] )
    }

    const handleCreate = async() => {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'uploads');

        try {
            const dataRes = await axios.post(
                'https://api.cloudinary.com/v1_1/dd4p4aju8/image/upload',
                formData 
            );

            const { url } = dataRes.data;
            try {
                const res = await axios.post( 'http://localhost:3000/api/products', {
                    title,
                    image: url,
                    desc,
                    prices,
                    extraOptions
                } ) 
                res.status === 201 && setClose( true );

            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className={ styles.container } >
        <div className={ styles.container_wrapper } >
            <span 
                className={ styles.container_wrapper_close } 
                onClick={ () => setClose( true ) }
            >X
            </span>
            <h4 className={ styles.container_wrapper_title } >Add a New Pizza</h4>
            <div className={ styles.container_wrapper_item } >
                <label 
                    className={ styles.container_wrapper_item_label }
                    htmlFor='file'
                >Choose an Image
                </label>
                <input
                    className={ styles.container_wrapper_item_file }
                    type='file'
                    id='file'
                    onChange={ e => setFile( e.target.files[0] ) }
                />
            </div>
            <div className={ styles.container_wrapper_item } >
                <label 
                    className={ styles.container_wrapper_item_label }
                    htmlFor='title'
                >Title
                </label>
                <input
                    className={ styles.container_wrapper_item_input }
                    type='text'
                    id='title'
                    placeholder='Enter title here....'
                    onChange={ e => setTitle( e.target.value )}
                />
            </div>
            <div className={ styles.container_wrapper_item } >
                <label 
                    className={ styles.container_wrapper_item_label }
                    htmlFor='desc'
                >Description
                </label>
                <textarea
                    className={ styles.container_wrapper_item_textarea }
                    type='textarea'
                    id='desc'
                    rows={4}
                    placeholder='Describe here....'
                    onChange={ e => setDesc( e.target.value )}
                />
            </div>
            <div className={ styles.container_wrapper_item } >
                <label 
                    className={ styles.container_wrapper_item_label }
                >Prices
                </label>
                <div className={ styles.container_wrapper_item_prices } >
                    <input
                        className={ styles.container_wrapper_item_prices_input }
                        type='number'
                        placeholder='Small'
                        name='small'
                        onChange={ e => handleChangePrices( e, 0 )}
                    />
                    <input
                        className={ styles.container_wrapper_item_prices_input }
                        type='number'
                        placeholder='Medium'
                        name='medium'
                        onChange={ e => handleChangePrices( e, 1 )}
                    />
                    <input
                        className={ styles.container_wrapper_item_prices_input }
                        type='number'
                        placeholder='Large'
                        name='large'
                        onChange={ e => handleChangePrices( e, 2 )}
                    />
                </div>
            </div>
            <div className={ styles.container_wrapper_item } >
                <label 
                    className={ styles.container_wrapper_item_label }
                >Extras
                </label>
                <div className={ styles.container_wrapper_item_extras } >
                    <input
                        className={ styles.container_wrapper_item_extras_input }
                        type='text'
                        placeholder='Sauce...'
                        onChange={handleExtraInput}
                        name='text'
                    />
                    <input
                        className={ styles.container_wrapper_item_extras_input }
                        type='number'
                        placeholder='Price'
                        onChange={handleExtraInput}
                        name='price'
                    />
                    <button 
                        className={ styles.container_wrapper_item_extras_btn }
                        onClick={ handleExtras }
                    >Add
                    </button>
                </div>
            </div>
            {
                extraOptions.map( extra => (
                    <span key={ extra.text } > { extra.text } </span>
                ) )
            }
            <button 
                className={ styles.container_wrapper_createBtn } 
                onClick={ handleCreate }
            >Create
            </button>
        </div>
    </div>
  )
}

export default Add