import React, { useContext } from 'react'
import { cart } from '../context/Context'
import './styles.css'
import SingleProduct from './SingleProduct'
import Filters from './Filters'

const Home = () => {

    const { state: { products } } = useContext(cart)

    return (
        <div className='home'>
            <Filters />
            <div className="productContainer">
                {
                    products.map((prod) => {
                        return <SingleProduct prod={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Home