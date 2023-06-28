const Messages = ({ unreadMessages }) => {
    return (
        <div>
            <h4>¡Hola!</h4>
            {unreadMessages.length > 0 && (
                <p>you hath {unreadMessages.length} unread messages.</p>
            )}
        </div>
    )
}

export default Messages
