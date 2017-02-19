import React from 'react';
import {StoriesList} from '../components/storiesListComponent/storiesListComponent'
import {StoriesActionCreator} from '../store/storiesActionCreator'
import {connect} from 'react-redux';
import {NavBar} from '../components/navBarComponent/navBarComponent'


@connect((store)=>{
    return {
        stories : store.stories.stories,
        pending : store.stories.pending,
        errored : store.stories.errored
    }
})
export class StoriesManager extends React.Component{
    componentDidMount(){
        this.fetchStories(this.props.route.storiesType);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.route.storiesType !== this.props.route.storiesType){
            this.fetchStories(nextProps.route.storiesType);
        }
    }
    fetchStories(type){
        this.props.dispatch(StoriesActionCreator.loadStories(type));
    }
    render(){
        return (<div>
            <NavBar/>
            <StoriesList onFetch={this.fetchStories.bind(this)} stories={this.props.stories} pendingStories={this.props.pending}/>
        </div>);
    }
}