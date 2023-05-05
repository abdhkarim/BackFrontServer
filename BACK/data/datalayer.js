const file = "./data/customers.json"; // Chemin du fichier JSON contenant les données des clients
const fs = require('fs'); // Module pour la lecture et l'écriture de fichiers

let data = {
    // Récupère tous les clients depuis le fichier JSON
    getAllClients : function(){
        const rawdata = fs.readFileSync(file); // Lit le contenu du fichier JSON
        let clients = JSON.parse(rawdata); // Parse le contenu JSON en un tableau JavaScript
        return clients; // Retourne le tableau de clients
    },

    getmaxid(){
        const rawdata = fs.readFileSync(file); // Lit le contenu du fichier JSON
        let clients = JSON.parse(rawdata);
        let id = clients[clients.length-1].id
        return id;
    },
    // Récupère un certain nombre de clients à partir d'une page donnée
    getClients : function(number, page){
        const rawdata = fs.readFileSync(file); // Lit le contenu du fichier JSON
        let clients = JSON.parse(rawdata); // Parse le contenu JSON en un tableau JavaScript
        const total = clients.length; // Nombre total de clients dans le tableau
        if(number && page){
            // Découpe le tableau de clients en fonction du nombre et de la page donnée
            clients = clients.slice((page - 1)*number, page*number);
        }
        clients = {
            total : total,
            clients : clients,
            id : this.getmaxid(),
            
        };

        return clients; // Retourne un objet contenant le nombre total de clients et le tableau de clients à afficher
    },

    // Ajoute un nouvel utilisateur au fichier JSON
    addUser : function(user){
        const rawdata = fs.readFileSync(file); // Lit le contenu du fichier JSON
        let clients = JSON.parse(rawdata); // Parse le contenu JSON en un tableau JavaScript
        clients.push(user); // Ajoute le nouvel utilisateur à la fin du tableau
        var newdata = JSON.stringify(clients); // Transforme le tableau JavaScript en JSON
        fs.writeFile(file, newdata, err => { // Écrit le nouveau contenu dans le fichier JSON
            if (err) throw err; // En cas d'erreur, affiche l'erreur dans la console
        });
    },

    // Met à jour les données d'un utilisateur dans le fichier JSON
    updateUser : function(user){
        const data = fs.readFileSync(file); // Lit le contenu du fichier JSON

        const clients = JSON.parse(data); // Parse le contenu JSON en un tableau JavaScript

        const objectid = clients.findIndex(obj => obj.id === user.id); // Trouve l'objet utilisateur dans le tableau

        if (objectid !== -1) { // Si l'objet existe
            const updatedObject = { ...clients[objectid], ...user }; // Met à jour les propriétés de l'objet avec les nouvelles données
            clients[objectid] = updatedObject; // Met à jour le tableau avec le nouvel objet mis à jour
            const updatedData = JSON.stringify(clients, null, 2); // Transforme le tableau JavaScript en JSON avec une indentation de 2 espaces
            fs.writeFileSync(file, updatedData); // Écrit le nouveau contenu dans le fichier JSON
            return 1; // Retourne 1 pour indiquer que la mise à jour a réussi
        } 
        
        else {
            return 0; // Retourne 0 pour indiquer que la mise à jour a échoué car l'utilisateur n'a pas été trouvé
        }
    },


// Cette fonction permet de supprimer un utilisateur à partir de son identifiant
    removeUser : function(removeuser){

        // Nous ouvrons le fichier contenant les données des utilisateurs
        const rawdata = fs.readFileSync(file);

        // Nous convertissons les données en objet JSON pour pouvoir les manipuler
        let newclients = JSON.parse(rawdata);

        // Nous recherchons l'identifiant de l'utilisateur à supprimer dans notre objet clients
        const id = newclients.findIndex(user => user.id === parseInt(removeuser));


    // Si l'utilisateur existe dans notre objet clients
    if (id != -1) {

        // Nous supprimons l'utilisateur de notre objet clients
        newclients.splice(id, 1);

        // Nous écrasons le fichier avec la nouvelle liste d'utilisateurs mise à jour
        fs.writeFileSync(file, JSON.stringify(newclients, null, 2));

        // Nous renvoyons la valeur 1 pour signaler que la suppression a été effectuée avec succès
        return 1;
    } else

    // Nous renvoyons la valeur 0 pour signaler que la suppression n'a pas été effectuée car l'utilisateur n'existe pas
        return 0;
    }
    };
module.exports = data;

