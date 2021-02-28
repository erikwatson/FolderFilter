const { app, BrowserWindow, Tray, Menu } = require('electron')
const fs = require('fs')

let tray;
const trayMenuTemplate = [
  { label: 'Add Filter', type: 'normal' },
  { label: 'Edit Filters', type: 'normal' },
  { type: 'separator' },
  { label: 'Preferences', type: 'normal' },
  { type: 'separator' },
  { label: 'Close', type: 'normal', click: shutdown }
]

function shutdown () {
  app.exit(0)
}

function createFilterWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    show: false
  })

  win.loadFile('./dist/index.html')

  win.once('ready-to-show', () => {
    win.show()
  })
}

function createNotificationMenu () {
  tray = new Tray('./dist/icon.png')
  tray.setToolTip('Folder Filter')

  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
  tray.setContextMenu(contextMenu)
}

function destroyNotificationMenu () {
  tray.destroy()
}

function start () {
  createNotificationMenu()
  createFilterWindow()
}

app.whenReady().then(() => {
  start()
})