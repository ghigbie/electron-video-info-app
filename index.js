const electron = require('electron');
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    console.log('Electron is running');
    const mainWindow = new BrowserWindow ({}); //the mpty object is for configuration options
    mainWindow.loadURL(`file://(${__dirname}/index.html`);
});