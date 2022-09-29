import React from 'react';
import { ReactDOM } from 'react-dom';
import { useState, useContext } from 'react';
import StoreContext from './StoreContext';
import { useObserver } from 'mobx-react-lite';
import User from './User';
import MessagesList from './MessagesList';

const KEY_ENTER = 13;   // enter keyCode 

// function Chat
const Chat = () => {
    const store = useContext(StoreContext);
    const [text, setText] = useState('');
    const handleChange = e => {
        setText(e.target.value);
    };
    const handleKeyDown = e => {
        if (KEY_ENTER === e.keyCode) {
            handleSend();
        }
    };
    const handleSend = () => {
        if (0 < text.length) {
            store.sendMessage(text);
            setText('');
        }
    };
    return useObserver(() => (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(User, null)),
        React.createElement("div", null,
            React.createElement(MessagesList, { user: store.user, values: store.messages.sortedValues }),
            React.createElement("div", null,
                React.createElement("div", { className: "form-row mt-3" },
                    React.createElement("div", { className: "col-10" },
                        React.createElement("input", { type: "text", placeholder: "Enter your message here...", value: text, className: "form-control", onChange: handleChange, onKeyDown: handleKeyDown })),
                    React.createElement("div", { className: "col-2" },
                        React.createElement("button", { disabled: 0 === text.length, onClick: handleSend, className: "btn btn-primary btn-block" }, "Send"))))))));
};

export default Chat;