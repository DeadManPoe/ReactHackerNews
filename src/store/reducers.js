/**
 * Created by giorgiopea on 13/02/17.
 */
import {State} from './state';
import {StoriesEffector} from '../effectors/storiesEffector'

export function storiesReducer(state=State.stories ,action){
    switch(action.type){
        case "LOAD_STORIES":{
            StoriesEffector().loadStories();
            return Object.assign({},state,{pending: true})
        }
        case "PROVIDE_STORIES": {
            return {stories: action.payload, pending:false, errored:false}
        }
        default : {
            return state;
        }
    }
}