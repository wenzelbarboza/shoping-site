import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Cart } from '../context/Context';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai'

const CartPage = () => {
    let { state: { cart }, dispatch } = useContext(Cart)
    const [total, setTotal] = React.useState(0)
    useEffect(() => {
        setTotal(cart.reduce((acc, item) => (item.price * item.qty + acc), 0))
    })

    return (
        <div className='home' >
            <div className='productContainer' >
                <ListGroup>
                    {cart.map((prod) => (
                        <ListGroup.Item key={prod.id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={prod.image} alt={prod.name} fluid rounded />
                                </Col>
                                <Col md={2}>
                                    <span>{prod.name}</span>
                                </Col>
                                <Col md={2}>₹ {prod.price}</Col>
                                <Col md={2}>
                                    <span style={{ display: "block" }}>Rating: </span>
                                    <Rating rating={prod.ratings} />
                                </Col>
                                <Col md={2}>
                                    <span>Qty:</span>
                                    <Form.Control
                                        as="select"
                                        value={prod.qty}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "CHANGE_CART_QTY",
                                                payload: {
                                                    id: prod.id,
                                                    qty: e.target.value,
                                                },
                                            })
                                        }
                                    >
                                        {[...Array(prod.inStock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <AiFillDelete
                                        fontSize="30px"
                                        style={{ cursor: "pointer" }}
                                        onClick={
                                            () => (
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod
                                                })
                                            )
                                        }
                                    />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className='filters summary' >
                <div className='title'>Subtotal: {cart.length} (items)</div>
                <span style={{ fontWeight: 700, fontSize: 20 }}>total:{total}</span>
                <Button className='btn-custom' disable={cart.length === 0}>checkout</Button>
            </div>
        </div>
    )
}

export default CartPage

