import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MessageBox.scss';
import { addMessage } from '../../redux/actions';

class MessageBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form className="message-box" onSubmit={this.handleSubmit}>
                <input
                    value={this.state.message}
                    onChange={this.handleInputChange}
                />
            </form>
        );
    }

    handleInputChange(event) {
        this.setState({
            message: event.currentTarget.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.addMessage(
            this.props.user,
            this.state.message
        );
        this.setState({
            message: ''
        });
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (user, message) => dispatch(addMessage(user, message))
    };
};

export default connect(null, mapDispatchToProps)(MessageBox);