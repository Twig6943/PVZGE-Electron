const { app, BrowserWindow, globalShortcut } = require('electron');

let win;
const SCROLLBAR_FIX_CSS = `
html, body, #GameDiv, #Cocos3dGameContainer, #GameCanvas {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  overflow: hidden !important;
}
`;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      devTools: false
    }
  });

  win.loadFile('pvzge_web/docs/index.html');
  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(SCROLLBAR_FIX_CSS).catch((err) => {
      console.error('Failed to inject scrollbar fix CSS:', err);
    });
  });
  win.removeMenu(); // hides the top menu bar

  // Register shortcuts for fullscreen toggle
  globalShortcut.register('F4', () => {
    win.setFullScreen(!win.isFullScreen());
  });

  globalShortcut.register('F11', () => {
    win.setFullScreen(!win.isFullScreen());
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => {
  // Unregister all shortcuts
  globalShortcut.unregisterAll();
});
