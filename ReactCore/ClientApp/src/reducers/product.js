//import {SET_CURRENT_USER} from '../actions/types';

const initialState = {
    list: [
        // {
        //     id: 1,
        //     name: 'Сало',
        //     image: "https://i.pinimg.com/originals/6e/e8/82/6ee882416c7f548255bd2cf08c09b67b.jpg"
        // },
        // {
        //     id: 2,
        //     name: "Катлета",
        //     image: "https://e3.edimdoma.ru/data/recipes/0009/4310/94310-ed4_wide.jpg?1485985503"
        // }
    ]
}

export default (state = initialState, action={}) => {
    console.log('-----Action product Reducer----------',action);
    switch(action.type) {
        // case SET_CURRENT_USER: 
        //     return {
        //         user: action.user
        //     };
        default: return state;
    }
}