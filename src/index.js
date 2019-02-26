import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const firstReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_ONE') {
        console.log('Button One was clicked');
        console.log(state);//whatever we return from our reducer, we are adding to our redux state or whatever you return from the first time is what your state is going to be the next time
        state ++;
    }
    return state;
};
//default value is set to 100. if it doesn't have a value it will be 100
const secondReducer = (state = 100, action) => {
    if (action.type === 'BUTTON_TWO'){
        console.log(`Button Two was clicked`); 
        console.log(state);
        state --;
    }
    
    return state;
}

const elementListReducer = (state = [], action) => {
    if (action.type === 'ADD_ELEMENT') {
        console.log(`Add Element was clicked`);
        state = [...state, action.payload];
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer,
        elementListReducer,
    }),
);











ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


