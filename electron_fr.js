const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
    // Création de la fenêtre du navigateur.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: {
        // preload: path.join(__dirname, 'preload.js')
        // }
    })

    // et chargement du fichier index.html de l'application.
    mainWindow.loadFile('index.html')

    // Ouvrir les outils de développement.
    // mainWindow.webContents.openDevTools()
}

// Cette méthode sera appelée lorsque Electron aura terminé
// son initialisation et sera prêt à créer des fenêtres de navigateur.
// Certaines API ne peuvent être utilisées qu'après cet événement.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // Sur macOS, il est courant de recréer une fenêtre dans l'application lorsque
        // l'icône du dock est cliquée et qu'aucune autre fenêtre n'est ouverte.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quitter lorsque toutes les fenêtres sont fermées, sauf sur macOS. Sur macOS, il est courant
// que les applications et leur barre de menu restent actives jusqu'à ce que l'utilisateur quitte
// explicitement avec Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
