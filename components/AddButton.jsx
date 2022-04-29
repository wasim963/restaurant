import React from 'react';
import styles from '../styles/sass/AddButton.module.scss';

const AddButton = ( { setClose } ) => {
  return (
    <div className={ styles.container } >
        <button 
            className={ styles.container_btn } 
            onClick={ () => setClose( false ) }
        >Add New Pizza
        </button>
    </div>
  )
}

export default AddButton