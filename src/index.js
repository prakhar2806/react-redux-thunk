import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux setup steps
import { Provider } from 'react-redux' //allow to inject global store
import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducers/reducer';
import thunk from "redux-thunk";


// const logAction = store => {
//     return next => {
//         return  action =>{
//             const result = next(action);  
//             console.log(`caught in the middleware ${JSON.stringify(result)}`);
//             return result;
//         }
//     }
// } 
// const store = createStore(reducer, applyMiddleware(logAction,thunk));

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
