const Messages = ({ unreadMessages }) => {
    return (
        <div>
            <h1>¡Hola!</h1>
            {unreadMessages.length > 0 && (
                <h2>you hath {unreadMessages.length} unread messages.</h2>
            )}
        </div>
    )
}

export default Messages
