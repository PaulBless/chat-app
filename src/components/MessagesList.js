import React from 'react'
import { useRef, useEffect } from 'react';
import { css } from '@emotion/core';
import Message from './Message';

// object styling
const messagesStyle = css `
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
`;

// set property
const MessagesList = props => {
    const messagesRef = useRef();
    useEffect(() => {
        messagesRef.current.scroll(0, messagesRef.current.scrollHeight);
    }, [messagesRef.current, props.values]);
    return (React.createElement("div", { css: messagesStyle, className: "border", ref: messagesRef }, props.values.map((message, index) => (React.createElement(Message, { key: index, isOwn: message.user === props.user, sender: message.user }, message.text)))));
};

export default MessagesList;