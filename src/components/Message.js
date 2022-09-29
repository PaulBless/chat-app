import React from 'react';
import { ReactDOM } from 'react-dom';
import { css } from '@emotion/core';
import classNames from 'classnames';

// styling to message box
const messageStyle = css `
    float: right;
    > .message__sender {
        text-align: right;
    }
    > .message__body {
        padding: 10px;
        border-radius: 4px 0 0 4px;
        color: #666;
        background: #f0f0f0;
    }
    &.message_own {
        float: left;
        > .message__sender {
            text-align: left;
        }
        > .message__body {
            border-radius: 0 4px 4px 0;
            color: #fff;
            background: #206fff;
        }
    }
`;

// message box property
const Message = props => (React.createElement("div", { className: "clearfix" },
    React.createElement("div", { css: messageStyle, className: classNames('m-2', {
            message_own: props.isOwn
        }) },
        React.createElement("h6", { className: "message__sender mb-1" }, props.sender),
        React.createElement("div", { className: "message__body" }, props.children))));
export default Message;
 