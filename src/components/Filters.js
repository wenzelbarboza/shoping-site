import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './styles.css'
import Rating from './Rating'

const Filters = () => {
    const [rate, SetRate] = React.useState(3)
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
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rate={rate} style={{ cursor: "pointer" }} onClick={(val) => SetRate(val)}></Rating>
            </span>
            <Button className="clear-btn" >
                Clear Filters
            </Button>
        </div>
    )
}

export default Filters