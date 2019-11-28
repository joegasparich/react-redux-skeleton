import React, { Component } from 'react';

export default class Message extends Component {
    render() {
        return (
            <p className={`message ${this.props.owner}`} style={{color: this.props.colour}}>{this.props.message.content}</p>
        );
    }
}
