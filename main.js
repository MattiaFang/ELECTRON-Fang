const {app,BrowserWindow} = require('electron')

// 热加载
const reloader = require('electron-reloader')
reloader(module)

// 监听初始化完成得到生命周期
app.on('ready',()=>{
    const mainWindow = new BrowserWindow({
        width:600,
        height:500
    })
    mainWindow.loadFile('./index.html')
})