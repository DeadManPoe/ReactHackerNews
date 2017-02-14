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

    render(){
        let listItems = this.props.stories.map(item =>
            <li key={item}>{item}</li>);

        return <div>
            <p style={this.computePending()}>Loading stories ...</p>
            <button onClick={()=>{
                this.props.onFetch();
            }}>fetch realt</button>
            <ul>{listItems}</ul>
        </div>;
    }
}