import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './src/store/store'
import { Router, Route, browserHistory, Link } from 'react-router'
import {StoriesManager} from './src/containers/storiesManager'
export const store = configureStore();

class RootComponent extends React.Component{
    render(){
        return (<Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={StoriesManager} storiesType="top"/>
                <Route path="/new" component={StoriesManager} storiesType="new"/>
                <Route path="/ask" component={StoriesManager} storiesType="ask"/>
                <Route path="/jobs" component={StoriesManager} storiesType="jobs"/>
                <Route path="/shows" component={StoriesManager} storiesType="shows"/>
            </Router>
        </Provider>);
    }
}
ReactDOM.render(<RootComponent/>, document.getElementById("root"));