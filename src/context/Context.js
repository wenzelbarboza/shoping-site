import { createContext, useContext, useReducer } from "react";
import React from 'react'
import { randBoolean, randFullName, randImg, randNumber, randUuid, seed } from "@ngneat/falso";
import cartReducer from "./Reducers";

export const cart = createContext()
seed(100)

function Context({ children }) {

    const data = [...Array(20)].map(() => ({
        id: randUuid(),
        name: randFullName(),
        price: randNumber({ min: 1, max: 1000 }),
        image: randImg(),
        inStock: randNumber({ min: 0, max: 8 }),
        fastDelivery: randBoolean(),
        ratings: randNumber({ min: 1, max: 5 }),
    }))
    console.log(data)

    const [state, dispatch] = useReducer(cartReducer, {
        products: data,
        cart: []
    })

    return (
        <cart.Provider value={{ state, dispatch }}>{children}</cart.Provider>
    )
}

export default Context

