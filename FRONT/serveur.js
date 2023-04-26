// Importation du module express
const express = require('express');

// Initialisation de l'application express
const app = express();

// Définition du port sur lequel le serveur écoute
const port = 3000;

// Utilisation du middleware express pour servir des fichiers statiques à partir du dossier "public"
app.use(express.static('public'));

// Utilisation du middleware express pour servir la bibliothèque jQuery depuis le dossier "node_modules"
// accessible via l'URL "/jquery"
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// Lancement du serveur sur le port spécifié
app.listen(port, () => {
console.log('App listening on port ${port}')
})