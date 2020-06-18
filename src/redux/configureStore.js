// allows to create redux store
import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// combineReducers used to combine multiple reducers
// createStore takes two parameter second is optional


export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
        // passing these two middlewares to application
    );

    return store;
}