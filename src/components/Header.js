import { prettyDOM } from '@testing-library/react';
import React from 'react'
import { useContext } from 'react';
import { Badge, Container, NavDropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Cart } from '../context/Context';
import { AiFillDelete } from "react-icons/ai"
import { BsCartDashFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { state: { cart }, dispatch, productFilterDispatch } = useContext(Cart)
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to='./'><Button >Home page</Button></Link>
                </Navbar.Brand>
                {/* search */}
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 500 }}
                        type="search"
                        placeholder="Search a product..."
                        className="m-auto"
                        aria-label="Search"
                        onChange={(event) => (productFilterDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: event.target.value
                        }))}
                    />
                </Navbar.Text>
                {/* dropdown */}
                <Nav>
                    <NavDropdown style={{ fontSize: "25px" }} title={<Badge><BsCartDashFill style={{ fontSize: "30px", paddingRight: "5px" }} /> {cart.length}</Badge>} id="basic-nav-dropdown" align="end" onSelect={e => e.stopPropagation()} >
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
                            (<NavDropdown.Item >cart is empty</NavDropdown.Item>)}
                        <Link to='/cartPage'><Button style={{ width: "95%", margin: "0 5px" }} variant="primary">cart page</Button></Link>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header