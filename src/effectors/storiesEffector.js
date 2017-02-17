/**
 * Created by giorgiopea on 14/02/17.
 */
import {store} from "../../main";
import axios from "axios";
import {configs} from "../../configs"
import {StoriesActionCreator} from "../store/storiesActionCreator"
const loadStories = ()=>{
    axios.get(configs.storiesEndpoint).then((result)=>{
        let pushingArray = [];
        for(let i=0; i<30; i++){
            pushingArray.push(axios.get(configs.storyEndpoint.replace("@@@",result.data[i])));
        }
        Promise.all(pushingArray).then((results)=>{

            store.dispatch(StoriesActionCreator.provideStories(results.map((item)=>{
                return item.data
            })));
        });
    })
};

export const StoriesEffector = ()=>{
    return {
        loadStories : loadStories
    }
};