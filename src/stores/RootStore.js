import { types } from 'mobx-state-tree';
import MessagesStore from './MessagesStore';
export default types
    .model({
    user: types.maybe(types.string),
    messages: MessagesStore
})
    .actions(self => ({
    login(user) {
        self.user = user;
    },
    sendMessage(text) {
        self.messages.addMessage({
            user: self.user,
            text
        });
    },
    acceptSnapshot(snapshot) {
        self.messages = snapshot;
    },
    logout() {
        self.user = undefined;
    }
}))
    .views(self => ({
    get isLogged() {
        return 'string' === typeof self.user && 0 < self.user.length;
    }
}));
 