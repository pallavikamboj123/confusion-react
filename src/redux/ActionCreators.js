import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';
// every action returns a plain js object
// each action takes two things:- type and payload
// payload contains data regarding that action
// type is for reducer function to understand what kinda action this is


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};



// fetchDishes is a thunk as it is returning a fucntion
// thunk returns a function instead of an action
export const fetchDishes = () => (dispatch) => {

    console.log("outside");
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error("Error: " + response.status + ": "+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error("Error: " + response.status + ": "+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error("Error: " + response.status + ": "+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));

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

//leaders

export const fetchLeaders = () => (dispatch) => {

   
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error("Error: " + response.status + ": "+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errMess = new Error(error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));

}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

//feedback

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {

    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    };
    newFeedback.date = new Date().toISOString();
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => {alert(response)})
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

// export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) =>{
//     new feedback = {
//         firstname: firstname,
//         lastname: lastname,
//         telnum: telnum,
//         email: email,
//         agree: agree,
//         contactType: contactType,
//         message: message
//     };
//     feedback.date = new Date().toISOString();
//     return fetch(baseUrl + 'feedback',{
//         method: "POST",
//         body: JSON.stringify(feedback),
//         headers:{
//             "Content-Type" : "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if(response.ok){
//             return response;
//         }
//         else{
//             new err = new Error("Error: " + response.status +': ' + response.statusText );
//             err.response = response;
//             throw err;
//         }
//     }, error => {
//             var err = new Error(error.message);
//             throw err;
//     })
//     .then(response => response.JSON())
//     .then(feedback => {alert(feedback); })
//     .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); } );
// };