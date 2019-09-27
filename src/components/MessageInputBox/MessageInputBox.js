import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addMessage } from '../../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        addMsg: (message) => dispatch(addMessage(message))
    }
}

class MessageInputBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            message: event.currentTarget.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.addMsg(this.state.message);

        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.message} onChange={this.handleChange} />
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(MessageInputBox);