import React from 'react';
import ReactDOM from 'react-dom';

class RootComponent extends React.Component{
    render(){
        return <h1>Horay!!</h1>
    }
}
ReactDOM.render(<RootComponent/>, document.getElementById("root"));