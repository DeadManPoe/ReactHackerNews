/**
 * Created by giorgiopea on 14/02/17.
 */
import {store} from "../../main";
import axios from "axios";
import {configs} from "../../configs"
import {StoriesActionCreator} from "../store/storiesActionCreator"
const loadStories = ()=>{
    axios.get(configs.storiesEndpoint).then((result)=>{
        for(let i=0; i<30; i++){
            axios.get(configs.storyEndpoint.replace("@@@",result.data[i])).then(
                (result)=>{
                    store.dispatch(StoriesActionCreator.provideStories(result.data))
                }
            )
        }
    })
};

export const StoriesEffector = ()=>{
    return {
        loadStories : loadStories
    }
};