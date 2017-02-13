import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './src/store/store'
let store = configureStore();

class RootComponent extends React.Component{
    render(){
        return <Provider store={store}><h1>Horay!!</h1></Provider>
    }
}
ReactDOM.render(<RootComponent/>, document.getElementById("root"));