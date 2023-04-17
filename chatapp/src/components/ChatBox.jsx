import React from 'react';

function ChatBox({ value }) {
    if (value === 0) {
        return (
            <div>
                <h1>Person 1</h1>
            </div>
        );
    } else if (value === 1) {
        return (
        <div>
            <h1>Person 2</h1>
        </div>
        )
    } else {
        return (
            <h1>Select a friend from your friends list or Add a Friend to Start Chatting!</h1>
        )
    }
}

export default ChatBox