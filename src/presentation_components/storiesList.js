import React from 'react'

export class StoriesList extends React.Component{

    computePending(){
        if(this.props.pending){
            return {
                display : "block"
            }
        }
        return {
            display : "none"
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
        let listItems = this.props.stories.map(item =>
            <li key={item.id}><a href={item.url}>{item.title}</a><span>{this.computeUrlHost(item.url)}</span></li>);

        return <div>
            <p style={this.computePending()}>Loading stories ...</p>
            <button onClick={()=>{
                this.props.onFetch();
            }}>fetch realt</button>
            <ul>{listItems}</ul>
        </div>;
    }
}