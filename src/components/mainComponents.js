import React, { Component } from 'react';
import HomePage from './homeComponent';
import Menu from './menuComponent';
import {DISHES} from '../shared/dishes';
import Dishdetail from './dishDetailComponent';
import Header from './headerComponent'
import Footer from './footerComponent';
import {Switch, Route, Redirect} from 'react-router';

class Main extends Component{


constructor(props){
  super(props);

  this.state = {
    dishes : DISHES,
    // selectedDish : null
  }
}

  
// onDishSelect(dishId){
//     this.setState({
//         selectedDish : dishId
//     });
// }

render(){

  const Home = ()=>{
    return(
      <HomePage />
    );
  }


  return (
    <div>
        <Header />

        {/* will switch between the components based on the url we specified */}
          <Switch>
            {/* if don't have any props to pass to component  */}
            <Route path="/home" component={Home} />

            {/* if we need to pass props then use inline function 
            syntax for passing the component */}
            <Route exact path="/menu" component={()=> <Menu dishes = {this.state.dishes}/>}/>
            
            {/* default url */}
            <Redirect to="/home" /> 
          </Switch>




        {/* <Menu  dishes = {this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>  */}
        {/* filter function gives the subarray of main array */}
        {/* <Dishdetail selectedDish = {this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
    </div>
  );
}

}


export default Main;
