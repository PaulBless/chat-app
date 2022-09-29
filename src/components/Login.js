import React from 'react'
import { ReactDOM } from 'react';
import { useContext } from 'react';
import StoreContext from './StoreContext';
import { useObserver } from 'mobx-react-lite';

const User = () => {
    const store = useContext(StoreContext);
    const handleLogout = () => {
        store.logout();
    };
    const handleClear = () => {
        store.messages.clear();
    };
    return useObserver(() => (React.createElement("div", { className: "row pb-3" },
        React.createElement("div", { className: "col-6" },
            React.createElement("h4", null,
                React.createElement("span", null, "Logged as:"),
                React.createElement("span", null, "\u00A0"),
                React.createElement("span", { className: "user__data__name" }, store.user))),
        React.createElement("div", { className: "col-6 text-right" },
            React.createElement("div", { className: "btn-group" },
                React.createElement("button", { className: "btn btn-warning", onClick: handleLogout }, "Logout"),
                React.createElement("button", { className: "btn btn-danger", onClick: handleClear }, "Clear chat data"))))));
};

export default User;