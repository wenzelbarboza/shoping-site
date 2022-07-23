import { Button } from 'react-bootstrap'
import React from 'react'
import Card from 'react-bootstrap/esm/Card'
import Rating from './Rating'
import { useContext } from 'react'
import { Cart } from '../context/Context'

const SingleProduct = ({ prod }) => {

    const { state: { cart }, dispatch } = useContext(Cart)

    return (
        <div className="products">
            <Card style={{ backgroundColor: "#b0a295" }}>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>price:{prod.price.split(".")[0]} rs</span>
                        <div>
                            {prod.fastDelivery ? (<span>will be delivered today</span>) : (<span>will be delivered in four days</span>)}
                        </div>
                        <Rating rate={prod.ratings} />
                    </Card.Subtitle>
                    {cart.some((ele) => ele.id === prod.id) ?
                        (<Button variant="danger" className='btn-custom-red' onClick={() => dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod
                        })}>Remove from cart</Button>) :
                        (<Button variant="primary" className='btn-custom' onClick={() => dispatch({
                            type: "ADD_TO_CART",
                            payload: prod
                        })} disabled={!prod.inStock}>{!prod.inStock ? "out of stock" : "add to cart"}</Button>)}
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct