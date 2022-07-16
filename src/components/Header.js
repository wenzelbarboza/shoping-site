import { prettyDOM } from '@testing-library/react';
import React from 'react'
import { useContext } from 'react';
import { Badge, Container, NavDropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Cart } from '../context/Context';
import { AiFillDelete } from "react-icons/ai"
import { BsCartDashFill } from "react-icons/bs"


const Header = () => {
    const { state: { cart }, dispatch } = useContext(Cart)
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 500 }}
                        type="search"
                        placeholder="Search a product..."
                        className="m-auto"
                        aria-label="Search"
                    />
                </Navbar.Text>
                <Nav>
                    <NavDropdown title={<Badge><BsCartDashFill /> {cart.length}</Badge>} id="basic-nav-dropdown" align="end" flip onSelect={e => e.stopPropagation()} >
                        {cart.length > 0 ?
                            cart.map((ele) => (
                                <NavDropdown.Item href="">
                                    <span className='cartitem' id={ele.id}>
                                        <img className='cartItemImg' src={ele.image} alt={ele.name} />
                                        <div className='cartItemDetail'>
                                            <span>{ele.name}</span>
                                            <span>${ele.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete
                                            fontSize="30px"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: ele
                                            })}
                                        />
                                    </span>
                                </NavDropdown.Item>
                            )) :
                            (<NavDropdown.Item href="">cart is empty</NavDropdown.Item>)}

                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header