import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from './Message';
import './Messages.scss';

class Messages extends Component {
    render() {
        const messages = this.props.messages && this.props.messages.map((message, index) => {
            return (
                <Message
                    message={message}
                    key={index}
                    owner={message.user.id === this.props.user.id ? 'mine' : 'theirs'}
                    colour={message.user.colour}
                />
            );
        });

        return (
            <div className="messages">
                {messages}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
};

export default connect(mapStateToProps, null)(Messages);