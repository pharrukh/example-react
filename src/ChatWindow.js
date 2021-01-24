import Input from './Input'
import Feed from './Feed'
import PropTypes from 'prop-types';

const ChatWindow = ({ messages, username, onAddNewMessage }) => {
    console.log('handleAddNewMessage ', onAddNewMessage)
    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>
            <Feed messages={messages} username={username} />
            <Input username={username} onAddNewMessage={onAddNewMessage} />
        </div>
    )
}

Input.propTypes = {
    messages: PropTypes.array,
    username: PropTypes.string,
    onAddNewMessage: PropTypes.function
}

export default ChatWindow;