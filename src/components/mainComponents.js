import React, { Component } from 'react';
import HomePage from './homeComponent';
import Menu from './menuComponent';
import Contact from './contactComponent';
import About from './aboutComponent';
import {DISHES} from '../shared/dishes';
import {  COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Dishdetail from './dishDetailComponent';
import Header from './headerComponent'
import Footer from './footerComponent';
import {Switch, Route, Redirect} from 'react-router';

class Main extends Component{


constructor(props){
  super(props);

  this.state = {
    dishes : DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
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
      <HomePage 
        dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion  = {this.state.promotions.filter((promo) => promo.featured)[0]}
        leader = {this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  }
      const DishWithId = ({match}) =>{
        return (
          <Dishdetail dish={this.state.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId , 10))[0]}
            comments = {this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId , 10))}
          />
          
        );
      }

      const AboutComponent = ()=>{
        return (
          <About leaders={this.state.leaders}/>
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
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component = {Contact} />
            <Route exact path="/aboutus" component = {AboutComponent} />
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
