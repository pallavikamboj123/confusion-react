import React, { Component } from 'react';
import HomePage from './homeComponent';
import Menu from './menuComponent';
import Contact from './contactComponent';
import About from './aboutComponent';
import Dishdetail from './dishDetailComponent';
import Header from './headerComponent'
import Footer from './footerComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router';
import {connect} from 'react-redux';
import { postFeedback,postComment ,fetchDishes, fetchPromos, fetchComments, fetchLeaders } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';




// state is available from redux store
// as we have connected our react app to redux


// returns either object or another function
// invoke each time store will updated
// returned object is merged with props
const mapStateToProps = state =>{
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }  
}

// this can be an object or a func
// can return either object or func
const mapDispatchToProps = (dispatch) => ({
  postFeedback: (firstname, lastname, telnum,email, agree, ContactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, agree,ContactType, message)),
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating,author, comment)),
  fetchDishes: ()=>{dispatch(fetchDishes())},
  fetchComments: ()=>{dispatch(fetchComments())},
  fetchPromos: ()=>{dispatch(fetchPromos())},
  fetchLeaders: ()=>{dispatch(fetchLeaders())},
  // reset:- inbuilt func of actions 
  // will reset form named feedback
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
});

class Main extends Component{


constructor(props){
  super(props);

}

componentDidMount() {
  this.props.fetchDishes();
  this.props.fetchComments();
  this.props.fetchPromos();
  this.props.fetchLeaders();
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
        dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading = {this.props.dishes.isLoading}
        dishesErrMess = {this.props.dishes.errMess}
        promotion  = {this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
        promosLoading = {this.props.promotions.isLoading}
        promosErrMess = {this.props.promotions.errMess}
        leader  = {this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading = {this.props.leaders.isLoading}
        leadersErrMess = {this.props.leaders.errMess}
        // leader = {this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
        // leadersLoading = {this.props.leaders.isLoading}
        // leadersErrMess = {this.props.leaders.errMess}
      />
    );
  }
      const DishWithId = ({match}) =>{
        return (
          <Dishdetail dish={this.props.dishes.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId , 10))[0]}
            isLoading = {this.props.dishes.isLoading}
            errMess = {this.props.dishes.errMess}  
            comments = {this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId , 10))}
            postComment= {this.props.postComment}
            commentsErrMess = {this.props.comments.errMess}
          />
          
        );
      }

      const AboutComponent = ()=>{
        return (
          <About leaders={this.props.leaders.leaders}
            isLoading = {this.props.leaders.isLoading}
            errMess = {this.props.leaders.errMess}
          />
        );
      }


  return (
    <div>
        <Header />

        {/* will switch between the components based on the url we specified */}
        <TransitionGroup>
          {/* each component has match, history and location */}
          <CSSTransition key={this.props.location.key}  classNames="page" timeout={300}>
          
          <Switch>
            {/* if don't have any props to pass to component  */}
            <Route path="/home" component={Home} />

            {/* if we need to pass props then use inline function 
            syntax for passing the component */}
            <Route exact path="/menu" component={()=> <Menu dishes = {this.props.dishes}/>}/>
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component = { () => <Contact postFeedback = {this.props.postFeedback} resetFeedbackForm = {this.props.resetFeedbackForm}/>} />
            <Route exact path="/aboutus" component = {AboutComponent} />
            {/* default url */}
            <Redirect to="/home" /> 
          </Switch>

          </CSSTransition>
        </TransitionGroup>
          



        {/* <Menu  dishes = {this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>  */}
        {/* filter function gives the subarray of main array */}
        {/* <Dishdetail selectedDish = {this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
    </div>
  );
}

}

// connected component to react rrdux
// take state from store and map it with props
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
