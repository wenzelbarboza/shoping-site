import { createContext, useContext, useReducer } from "react";
import React from 'react'
import cartReducer from "./Reducers";
import { faker } from '@faker-js/faker';


export const Cart = createContext()
faker.seed(100)

function Context({ children }) {

    const data = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(10000, 10000, true),
        inStock: faker.datatype.number({ max: 5 }),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.datatype.number({ max: 5 }),
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products: data,
        cart: []
    })

    return (
        <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    )
}

export default Context

