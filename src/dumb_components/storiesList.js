import React from 'react'

export class StoriesList extends React.Component{
    render(){
        let listItems = this.props.stories.map(item =>
            <li key={item}>{item}</li>);

        return <div>
            <button onClick={()=>{
                this.props.onFetch();
            }}>fetch realt</button>
            <ul>{listItems}</ul>
        </div>;
    }
}