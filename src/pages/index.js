import React from 'react';
import Layout from 'components/Layout';
import { useObserver } from 'mobx-react-lite';
import { useContext } from 'react';
import StoreContext from 'components/StoreContext';
import Login from 'components/Login';
import Chat from 'components/Chat';

const Index = () => {
    const store = useContext(StoreContext);
    return useObserver(() => (React.createElement(Layout, null, store.isLogged ? React.createElement(Chat, null) : React.createElement(Login, null))));
};
export default Index;