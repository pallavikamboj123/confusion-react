import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';
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

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
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


// fetching comments from server

export const fetchComments = () => (dispatch) => {


    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

// fetching promos from server

export const fetchPromos = () => (dispatch) => {

   
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});