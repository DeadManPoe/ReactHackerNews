import {createStore, combineReducers} from 'redux';
import {storiesReducer} from './reducers';
import {State} from './state';

let rootReducer = combineReducers({storiesReducer});

export const configureStore=()=>{
    return createStore(rootReducer,State);
};


