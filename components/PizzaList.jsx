import React from 'react';
import styles from '../styles/sass/PizzaList.module.scss'
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={ styles.container } >
        <h1 className={ styles.container_title } >THE BEST PIZZA IN TOWN</h1>
        <p className={ styles.container_desc } >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi quos accusamus veritatis.
            Nisi quod maxime repudiandae quaerat molestiae placeat eaque.
            Accusamus dolor voluptate perspiciatis pariatur doloremque nihil,
            adipisci quae voluptatibus quisquam molestias velit ducimus inventore libero!
            Nostrum libero eaque est, earum, velit excepturi
            optio tempora maiores a, provident assumenda.
        </p>
        <div className={ styles.container_wrapper } >
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </div>
  )
}

export default PizzaList