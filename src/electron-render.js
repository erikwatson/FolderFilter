const { app, BrowserWindow, Tray, Menu } = require('electron')

let tray;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./dist/index.html')
}

function createNotificationMenu () {
  tray = new Tray('./dist/icon.png')

  const contextMenu = Menu.buildFromTemplate([
    { label: 'One', type: 'radio' }
  ])

  tray.setToolTip('Folder Filter Actions')
  tray.setContextMenu(contextMenu)
}

function start () {
  createWindow()
  createNotificationMenu()
}

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    start()    
  }
})

app.whenReady().then(() => {
  start()
})