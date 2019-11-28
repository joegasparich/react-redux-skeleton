import { hot } from 'react-hot-loader/root';
import React, { Component} from 'react';

import './App.scss';
import MessageBox from '../MessageBox/MessageBox';
import Messages from '../Messages/Messages';

const users = [{
    id: 1,
    username: 'Joe',
    colour: 'blue'
}, {
    id: 2,
    username: 'Anders',
    colour: 'red'
}, {
    id: 3,
    username: 'Leo',
    colour: 'green'
}];

class App extends Component {
    render() {
        const userWindows = users.map((user, index) => {
            return (
                <div key={index} className="window" style={{border: `5px solid ${user.colour}`}}>
                    <Messages user={user} />
                    <MessageBox user={user} />
                </div>
            );
        });

        return (
            <div className="app">
                <h1>Chat App</h1>
                <div className="window-container">
                    {userWindows}
                </div>
            </div>
        );
    }
}

export default hot(App);