import { hot } from "react-hot-loader/root";
import React, { Component } from "react";

import "./App.scss";
import MessageInputBox from "../MessageInputBox/MessageInputBox";
import Messages from "../Messages/Messages";

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Hello, World!</h1>
                <div>
                    <Messages />
                    <MessageInputBox />
                </div>
                <div>
                    <Messages />
                    <MessageInputBox />
                </div>
            </div>
        );
    }
}

export default hot(App);