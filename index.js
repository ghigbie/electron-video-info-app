const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
    console.log('Electron is running');
    mainWindow = new BrowserWindow ({}); //the empty object is for configuration options
    mainWindow.loadURL(`file://(${__dirname}/index.html`);

    ipcMain.on('video:submit', (event, path) => { //ipcMain.on receives the information sent from ipcRenderer in the window
        ffmpeg.ffprobe(path, (err, metadata) => {
            if(err){
                console.log('There was an Error: ', err)
            }else{
                console.log('Video duration is:', metadata.format.duration);
            }
        });
    });
});