import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../../styles/sass/Admin.module.scss'

const Index = ( { products, orders } ) => {

    const status = [ 'Preparing', 'On the way', 'Delivered' ];
    const [ productList , setProductList] = useState( products );
    const [ orderList, setOrderList ] = useState( orders )

    const handleDeleteProduct = async( id ) => {
        console.log('Admin.handleDeleteProduct()');

        try{
            await axios.delete('http://localhost:3000/api/products/' + id );
            setProductList( productList.filter( product => product._id !== id ) );
        }catch( err ) {
            console.log( err )
        }
    }

    const handleStatus = async( id ) => {
        console.log('Admin.handleStatus()');

        const filteredOrderList = orderList.filter( order => order._id !== id );
        const currentStatus = orderList.filter( order => order._id === id )[ 0 ].status;

        try {
            const orderRes = await axios.put('http://localhost:3000/api/orders/' + id, { status: currentStatus + 1 } );
            setOrderList( [ orderRes.data, ...filteredOrderList ] );
        } catch( err ) {
            console.log( err );
        }
    }

  return (
    <div className={ styles.container } >
        <div className={ styles.container_item } >
            <h3 className={ styles.container_item_title } >Products</h3>
            <table className={ styles.container_item_table } >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map( product => (
                            <tr key={ product._id } >
                                <td>
                                    <Image src={ product.image } width='30' height='30' objectFit='contain' alt='Image' />
                                </td>
                                <td>{ product._id  }</td>
                                <td>{ product.title }</td>
                                <td>${ product.prices[ 0 ] }</td>
                                <td>
                                    <button 
                                        className={ styles.editBtn }
                                    > Edit
                                    </button>
                                    <button 
                                        className={ styles.deleteBtn }
                                        onClick={ () => handleDeleteProduct( product._id ) }
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        ) )
                    }
                </tbody>
            </table>
        </div>
        <div className={ styles.container_item } >
            <h3 className={ styles.container_item_title } >Orders</h3>
            <table className={ styles.container_item_table } >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map( order => (
                            <tr key={ order._id } >
                                <td>{ order._id }</td>
                                <td>{ order.customer }</td>
                                <td>${ order.total }</td>
                                <td>{ order.method === 0 ? <span>Cash</span> : <span>Paid</span> }</td>
                                <td>{ status[ order.status ]  }</td>
                                <td>
                                    <button
                                        className={ styles.nextBtn }
                                        onClick={ () => handleStatus( order._id ) }
                                    >Next Stage
                                    </button>
                                </td>
                            </tr>
                        ) )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export const getServerSideProps = async ( ctx ) => {

    const myCookie = ctx.req?.cookies || '';
    if( myCookie.token !== process.env.TOKEN ) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false
            }
        }
    }

    const productsRes = await axios.get( 'http://localhost:3000/api/products' )
    const ordersRes = await axios.get( 'http://localhost:3000/api/orders' )

    return {
        props: {
            products: productsRes.data,
            orders: ordersRes.data
        }
    }
}

export default Index