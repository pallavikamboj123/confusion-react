import * as ActionTypes from './ActionTypes';

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

