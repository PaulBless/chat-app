import React from 'react'
import NextApp, { Container } from 'next/app';
import Head from 'next/head';
import StoreContext from 'components/StoreContext';
import store from 'stores';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

class App extends NextApp {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};
        return {
            pageProps
        };
    }
    render() {
        const { Component, pageProps } = this.props;
        return (React.createElement(Container, null,
            React.createElement(Head, null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }),
            React.createElement("title", null, "Chat Test")),
            React.createElement(StoreContext.Provider, { value: store },
            React.createElement(Component, Object.assign({}, pageProps)))
        ));
    }
}
export default App;
 