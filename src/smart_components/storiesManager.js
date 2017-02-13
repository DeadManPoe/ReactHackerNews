import React from 'react';
import {StoriesList} from '../dumb_components/storiesList'
import axios from 'axios';

export class StoriesManager extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stories: ["a","v","l"]
        };
    }
    fetchStories(){
        axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then((results)=>{
            this.setState({
                stories : results.data
            })
        })
    }
    render(){
        return (<div>
            <h1>Horay</h1>
            <StoriesList onFetch={this.fetchStories.bind(this)} stories={this.state.stories}/>
        </div>)
    }
}