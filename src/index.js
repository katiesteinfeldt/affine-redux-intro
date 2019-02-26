import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const storeInstance = createStore(
    () => {
        console.log(`Hey I'm a reducer y'all!`);
    },
);











ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


