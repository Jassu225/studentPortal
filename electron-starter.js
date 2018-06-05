const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nativeWindowOpen: true
    }
  });

  // mainWindow.loadURL(path.join(__dirname, 'index.html'));
  mainWindow.loadURL("http://localhost:8080");

  mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('quit', () => {
  mainWindow = null;
});

// app.on("window-all-closed", () => {
//   if( process.platform === "darwin")
//     app.quit();
// });