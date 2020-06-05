import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,Collapse,NavItem, Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        };

        // using this we are binding toggleNAv function as js object
        // another way of doing is to pass arrow funtion in onclick method
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return (
            // <> short form of react fragmet</>
            //allows us to bind multiple react elements together
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className = "mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" 
                            alt="Resturant confusion" />

                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>About us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>Contact us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1> Resturant Confusion</h1>
                                <p>Click the “Save Note” button when you want to capture a screen. You can also highlight and save lines from the transcript below. Add your own notes to anything you’ve captured.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </>
        );
    }
}

export default Header;

