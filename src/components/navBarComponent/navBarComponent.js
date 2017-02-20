import React from "react";
import {Link} from 'react-router';
import './navBarComponent.css';

export class NavBar extends React.Component {

    render() {
        return <nav>
            <ul styleName="navBar__list">
                <li><Link to="/new">New</Link></li>
                <li><Link to="/comments">Comments</Link></li>
                <li><Link to="/ask">Ask</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/shows">Shows</Link></li>
            </ul>
        </nav>
    }
}