/**
 * Created by giorgiopea on 13/02/17.
 */
import {State} from './state';

export function storiesReducer(state=State ,action){
    console.log(state);
    return state;
}