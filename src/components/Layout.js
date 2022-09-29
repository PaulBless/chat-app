import React from "react";

const Layout = props => (React.createElement("div", null,
    React.createElement("nav", { className: "navbar bg-light" },
    React.createElement("span", { className: "navbar-brand" }, "React Localstorage Chat")),
    React.createElement("div", { className: "container pt-5" },
    React.createElement("div", { className: "row" },
    React.createElement("main", { className: "col-12" }, props.children)))));

export default Layout;
 