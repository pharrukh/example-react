import PropTypes from 'prop-types';

const Feed = ({ messages, username }) => (
    <ul className="message-list">
        {messages.map((message, index) => (
            <li
                key={index}
                className={
                    message.username === username ? 'message sender' : 'message recipient'
                }
            >
                <p>{`${message.username}: ${message.text}`}</p>
            </li>
        ))}
    </ul>
)

Input.propTypes = {
    messages: PropTypes.array,
    username: PropTypes.string
}

export default Feed;