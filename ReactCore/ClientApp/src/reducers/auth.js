import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
    user: {
        name: ''
    }
}

export default (state = initialState, action={}) => {
    console.log('-----Action auth Reducer----------',action);
    switch(action.type) {
        case SET_CURRENT_USER: 
            return {
                user: action.user
            };
        default: return state;
    }
}