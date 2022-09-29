const { ipcRenderer } = require('electron');

// node functionality here
process.once('loaded', () => {
    global.ipcRenderer = ipcRenderer;
});