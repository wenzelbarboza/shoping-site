import React, { useContext } from 'react'
import { Cart } from '../context/Context'
import './styles.css'
import SingleProduct from './SingleProduct'
import Filters from './Filters'

const Home = () => {

    const { state: { products }, productFilterState: { sort, byStock, byFastDevlivery, byRating, searchQuery } } = useContext(Cart)
    let filteredList = products

    const doFilter = () => {
        if (sort) {
            filteredList = filteredList.sort((a, b) => (
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            ))
        }
        if (!byStock) {
            filteredList = filteredList.filter((prod) => prod.inStock)
        }
        if (byFastDevlivery) {
            filteredList = filteredList.filter((prod) => prod.fastDevlivery)
        }
        if (byRating) {
            filteredList = filteredList.filter((prod) => (prod.ratings >= byRating ? true : false))
        }
        if (searchQuery) {
            filteredList = filteredList.filter((prod) => prod.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }

        return filteredList
    }


    return (
        <div className='home'>
            <Filters />
            <div className="productContainer">
                {
                    doFilter().map((prod) => {
                        return <SingleProduct prod={prod} key={prod.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Home