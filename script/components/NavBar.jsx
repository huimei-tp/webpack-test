import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Layout, Row } from 'antd';
import '../../css/NavBar.css';
import logo from '../../public/logo.png';

export default function NavBar(){
    const location = useLocation();
    return(
        <Layout>
            <div className="nav-bar">
                <Row>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/progress">Progress</NavLink>
                    <NavLink className="nav-link" to="/">
                        <img src={logo} alt="Logo" width="44" height="44"></img>
                    </NavLink>
                    <NavLink className="nav-link" to="/prototype">Prototype</NavLink>
                    <NavLink className="nav-link" to="/summary">Summary</NavLink>
                </Row>
            </div>
        </Layout>
    )

};