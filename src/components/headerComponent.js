import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,Collapse,NavItem, Jumbotron , Button, Modal, ModalHeader,ModalBody, FormGroup, Input,
Form,Label,  } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen : false
        };

        // using this we are binding toggleNAv function as js object
        // another way of doing is to pass arrow funtion in onclick method
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

     handleLogin(event){
        this.toggleModal();
        alert("username is: "+ this.username.value+" password is: "+this.password.value);
        event.preventDefault();
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
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick = {this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg">Login</span> </Button> 
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
                <Modal isOpen = {this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">User Name</Label>
                                <Input type="text" id="username" name="username" innerRef = {(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef = {(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" />
                                        Remember me
                                
                                </Label>
                            </FormGroup>
                            <Button type="submit" name="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </>
        );
    }
}

export default Header;

