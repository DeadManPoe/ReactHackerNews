import React from "react";
import "./storiesListComponent.css";

export class StoriesList extends React.Component {


    computePending() {
        if (this.props.pendingStories) {
            return {
                display: "flex"
            }
        }
        return {
            display: "none",
        }
    }

    computeUrlHost(url) {
        //noinspection JSUnresolvedFunction
        if (!url) {
            return ""
        }
        let url_ = new URL(url);
        return url_.hostname;
    }

    render() {
        /* */////
        let listItems = this.props.stories.map((item) =>{
          if(item.url){
              return <li styleName="storyItem" key={item.id}>
                  <span styleName="storyItem__thumbsup">👍</span>
                  <a styleName="storyItem__title" href={item.url}>{item.title}</a>
                  <a styleName="storyItem__hostname" href={this.computeUrlHost(item.url)}>({this.computeUrlHost(item.url)})</a>
              </li>
          }
           return <li styleName="storyItem" key={item.id}>
                  <span styleName="storyItem__thumbsup">👍</span>
                  <a styleName="storyItem__title" href={item.url}>{item.title}</a>
              </li>
        });

        return <div>
            <button onClick={() => {
                this.props.onFetch();
            }}>fetch realt
            </button>
            <div styleName="spinningContainer">
                <div styleName="spinningMsg" style={this.computePending()}>
                    <div styleName="spinnerOuter">
                        <div styleName="spinnerInner_hor"></div>
                        <div styleName="spinnerInner_ver"></div>
                    </div>
                    <span>Loading</span>
                </div>
            </div>

            <div styleName="storyItemsContainer">
                <ul>{listItems}</ul>
            </div>
        </div>;
    }
}