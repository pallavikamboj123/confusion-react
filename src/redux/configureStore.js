// allows to create redux store
import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
// createForm helps in adding form state to store
import {createForms} from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

// combineReducers used to combine multiple reducers
// createStore takes two parameter second is optional


export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
        // passing these two middlewares to application
    );



    // createForms we don't need to create reducers and actioncreators
    // react-redux-forms does everything on its own
    

    return store;
}