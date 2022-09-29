import { castToSnapshot } from 'mobx-state-tree';
import MessagesStore from 'stores/MessagesStore';

// storage key variable
const STORAGE_KEY = 'chat_messages';

export const parseData = (data) => {
    try {
        const parsedJson = JSON.parse(data);
        if (MessagesStore.is(parsedJson)) {
            return castToSnapshot(parsedJson);
        }
        else {
            return undefined;
        }
    }
    catch (_a) {
        return undefined;
    }
};

// function triggers to load from [localStorage] Datastore
export const loadData = () => {
    const loadedData = localStorage.getItem(STORAGE_KEY);
    return parseData(loadedData);
};

// save data to [localStorage]
export const saveData = (payload) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
};

export const processEvent = (e, callback) => {
    if (STORAGE_KEY === e.key) {
        const newValue = parseData(e.newValue);
        if (newValue) {
            callback(newValue);
        }
    }
};