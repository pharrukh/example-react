import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    state = {
        text: '',
    }

    handleMessageChange = (e) => {
        e.preventDefault()
        this.setState({ text: e.target.value })
    }

    handleSendMessage = (e) => {
        e.preventDefault()
        this.props.onAddNewMessage({ text: this.state.text, username: this.props.username })
        this.setState({ text: '' })
    }

    render() {
        return (
            <div>
                <form className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.text} onChange={this.handleMessageChange} />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={!this.state.text} onClick={this.handleSendMessage}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        )
    }

}

Input.propTypes = {
    username: PropTypes.string,
    onAddNewMessage: PropTypes.function
}

export default Input;