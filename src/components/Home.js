import React, { useContext } from 'react'
import { Cart } from '../context/Context'
import './styles.css'
import SingleProduct from './SingleProduct'
import Filters from './Filters'

const Home = () => {

    const { state: { products } } = useContext(Cart)

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