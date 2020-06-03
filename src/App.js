import React, { Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menuComponent';
import './App.css';
import {DISHES} from './shared/dishes';



class App extends Component{


constructor(props){
  super(props);

  this.state = {
    dishes : DISHES
  }
}

render(){
  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">navbarbrand</NavbarBrand>
          </div>
        </Navbar>

        {/* app is parentComponent and menu is child component and 
        here we have moved our dishes state from parent 
        to child component  and we are passing it in props 
        so that it will be available to all
        the child components */}
        <Menu  dishes = {this.state.dishes}/> 
    </div>
  );
}

}


export default App;
