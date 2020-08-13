import React, { Component, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import UserContext from "../context/user.context";
import Axios from 'axios';
import User from '../'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './component.css';

// import Error from './error.component';
export default function Login(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const {setUserData}=useContext(UserContext);
    const logout=()=>{
    setUserData({
        token:undefined,
        user:undefined,
    });
    localStorage.removeItem("jwt");
    window.location='/';
    
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar">
            
            <Navbar.Brand href={props.isAuthenticated? "/app":"/"}><img src={require('../Assets/db_logo.svg') }width="100px"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                   {!props.isAuthenticated&& <Link to="/login" className="nav-link">Sign in</Link>}
                   {!props.isAuthenticated&&<Link to="/register" className="nav-link">Register</Link>}
                  {props.isAuthenticated&& <Link to="/favourites" className="nav-link">Favourites</Link>}
                    {props.isAuthenticated&& <Link to="/" className="nav-link" onClick={logout}>Sign Out</Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );

   
}
