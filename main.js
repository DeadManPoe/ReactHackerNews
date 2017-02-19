import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './src/store/store'
import {StoriesManager} from './src/containers/storiesManager'
export const store = configureStore();

class RootComponent extends React.Component{
    render(){
        return <Provider store={store}><StoriesManager/></Provider>
    }
}
ReactDOM.render(<RootComponent/>, document.getElementById("root"));