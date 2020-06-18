import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
// every action returns a plain js object
// each action takes two things:- type and payload
// payload contains data regarding that action
// type is for reducer function to understand what kinda action this is
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating:  rating,
        author: author,
        comment: comment
    }
});

// fetchDishes is a thunk as it is returning a fucntion
// thunk returns a function instead of an action
export const fetchDishes = () => (dispatch) => {

    console.log("outside");
    dispatch(dishesLoading(true));

    setTimeout(() => {
        console.log("inside");
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});