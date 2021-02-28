const { app, BrowserWindow, Tray, Menu } = require('electron')

let tray;

function shutdown () {
  app.exit(0)
}

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
    { label: 'Add Filter', type: 'normal' },
    { label: 'Edit Filters', type: 'normal' },
    { type: 'separator' },
    { label: 'Preferences', type: 'normal' },
    { type: 'separator' },
    { label: 'Close', type: 'normal', click: shutdown }
  ])

  tray.setToolTip('Folder Filter')
  tray.setContextMenu(contextMenu)
}

function start () {
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