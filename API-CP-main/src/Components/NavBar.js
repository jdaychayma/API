import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to='/'><Navbar.Brand>
                <img
                    alt=""
                    src="/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
      API Check-Point
    </Navbar.Brand></Link>
            <Navbar.Collapse className="justify-content-end ">
                <Navbar.Text className="text-white">
                    Signed in as: Ahmed Ben Zid
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;