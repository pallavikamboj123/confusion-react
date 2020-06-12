// implementation of reducer function
// it will take prev state and action and will return a new state
// without changing the prev state

import {DISHES} from '../shared/dishes';
import { COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {
    dishes : DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// pure function (part of store)
export const Reducer = (state = initialState,action)=>{
    return state; //not modified state yet bc no action is introduced yet
};

