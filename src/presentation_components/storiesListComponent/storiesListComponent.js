import React from 'react'
import "./storiesListComponent.css";

export class StoriesList extends React.Component{

    computePending(){
        if(this.props.pendingStories){
            return {
                display : "flex"
            }
        }
        return {
            display : "none",
        }
    }
    computeUrlHost(url){
        //noinspection JSUnresolvedFunction
        if(!url){
            return ""
        }
        let url_ = new URL(url);
        return url_.hostname;
    }

    render(){
        console.log(this.props.stories);
        let listItems = this.props.stories.map(item =>
            <li key={item.id}><a href={item.url}>{item.title}</a><a href={this.computeUrlHost(item.url)}>({this.computeUrlHost(item.url)})</a></li>);

        return <div>
            <button onClick={()=>{
                this.props.onFetch();
            }}>fetch realt</button>
            <div styleName="spinningMsg" style={this.computePending()}>
                <div styleName="spinnerOuter">
                    <div styleName="spinnerInner_hor"></div>
                    <div styleName="spinnerInner_ver"></div>
                </div>
                <span>Loading</span>
            </div>

            <ul>{listItems}</ul>
        </div>;
    }
}