/**
 * Created by giorgiopea on 14/02/17.
 */
import {store} from "../../main";
import axios from "axios";
import {configs} from "../../configs"
import {StoriesActionCreator} from "../store/storiesActionCreator"
const loadStories = (type)=>{
    let refEndpoint;
    switch(type){
        case 'top' : {
            refEndpoint = configs.storiesEndpoint;
            break;
        }
        case 'new' : {
            refEndpoint = configs.newStoriesEndpoint;
            break;
        }
        case 'ask' : {
            refEndpoint = configs.askStoriesEndpoint;
            break;
        }
        case 'jobs' : {
            refEndpoint = configs.jobsStoriesEndpoint;
            break;
        }
        case 'shows' : {
            refEndpoint = configs.showStoriesEndpoint;
            break;
        }
        default : {
            refEndpoint = configs.storiesEndpoint;
            break;
        }

    }
    axios.get(refEndpoint).then((result)=>{
        let pushingArray = [];
        let upperLimit = Math.min(result.data.length, 30);
        for(let i=0; i<upperLimit; i++){
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