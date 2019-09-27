import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
}

class Messages extends Component {
    render() {
        const messageList = this.props.messages.map((message, index) => <div key={index}>{message.content}</div>);

        return (
            <div>
                {messageList}
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(Messages);