import React, { Component } from 'react';

import Menu from './menuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './dishDetailComponent';
import Header from './headerComponent'
import Footer from './footerComponent';

class Main extends Component{


constructor(props){
  super(props);

  this.state = {
    dishes : DISHES,
    selectedDish : null
  }
}

  
onDishSelect(dishId){
    this.setState({
        selectedDish : dishId
    });
}

render(){
  return (
    <div>
        <Header />
        <Menu  dishes = {this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/> 
        {/* filter function gives the subarray of main array */}
        <Dishdetail selectedDish = {this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
        <Footer />
    </div>
  );
}

}


export default Main;
