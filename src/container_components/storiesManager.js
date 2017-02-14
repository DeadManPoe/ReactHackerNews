import React from 'react';
import {StoriesList} from '../presentation_components/storiesList'
import {StoriesActionCreator} from '../store/storiesActionCreator'
import {connect} from 'react-redux';


@connect((store)=>{
    return {
        stories : store.stories.stories,
        pending : store.stories.pending,
        errored : store.stories.errored
    }
})
export class StoriesManager extends React.Component{

    fetchStories(){
        this.props.dispatch(StoriesActionCreator.loadStories());
    }
    render(){
        return (<div>
            <h1>Horay</h1>
            <StoriesList onFetch={this.fetchStories.bind(this)} stories={this.props.stories} pendingStories={this.props.pending}/>
        </div>)
    }
}