/**
 * Created by giorgiopea on 14/02/17.
 */
import {store} from "../../main";
import {axios} from "axios";
import {configs} from "../../configs"
import {StoriesActionCreator} from "../store/storiesActionCreator"
const loadStories = ()=>{
    axios.get(configs.storiesEndpoint).then((result)=>{
        Promise.all(result.data.map((itemId)=>{
            axios.get(configs.storyEndpoint.replace("@@@",itemId))
        })).then((results)=>{
            store.dispatch(StoriesActionCreator.provideStories(results))
        })
    })
};

export const StoriesEffector = ()=>{
    return {
        loadStories : loadStories
    }
};