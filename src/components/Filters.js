import React from 'react'
import { useState, useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import './styles.css'
import Rating from './Rating'
import { Cart } from '../context/Context'

const Filters = () => {
    const { productFilterState: { byStock, byFastDelivery, sort, byRating, searchQuery }, productFilterDispatch } = useContext(Cart)
    console.log(byStock, byFastDelivery, sort, byRating, searchQuery)
    return (
        <div className="filters">
            <span className="title"> <h5>Filter Products</h5> </span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                    onClick={
                        () => (productFilterDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "lowToHigh"
                        }))
                    }
                    checked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                    onClick={
                        () => (productFilterDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "HighToLow"
                        }))
                    }
                    checked={sort === "HighToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                    onClick={
                        () => (
                            productFilterDispatch({
                                type: "FILTER_BY_STOCK"
                            })
                        )
                    }
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                    onClick={
                        () => (
                            productFilterDispatch({
                                type: "FILTER_BY_DELIVERY"
                            })
                        )
                    }
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rate={byRating} style={{ cursor: "pointer" }} onClick={(val) => productFilterDispatch({
                    type: "FILTER_BY_RATING",
                    payload: val
                })}></Rating>
            </span>
            <Button className="clear-btn btn-custom" onClick={() => (productFilterDispatch({
                type: "CLEAR_FILTER"
            }))}>
                Clear Filters
            </Button>
        </div>
    )
}

export default Filters