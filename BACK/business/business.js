// Importation du module dataLayer
const data = require("../data/dataLayer");

// Définition de constantes pour les valeurs par défaut et limites de pagination
const defaultNumber = 10;
const defaultPage = 1;
const maxNumber = 50;

// Définition de l'objet "business" contenant les méthodes d'accès aux données
const business = {
// Méthode pour obtenir tous les clients
getAllClients : function(){
return data.getClients();
},
// Méthode pour obtenir une page de clients avec un nombre limité de clients par page
getClients : function(number, page){
    //initialise les pages si non fait
    if(page == undefined ){ // == ou === ?????
        page = defaultPage;
    }
    if(number == undefined ){ // == ou === ?????
        number = defaultNumber;
    }
   
    // Vérification que le nombre de clients par page ne dépasse pas la limite
    if(number > maxNumber)
        number = maxNumber;

    // Récupération des clients depuis la couche de données
    const clients = data.getClients(number, page);

    // Ajout de propriétés supplémentaires à l'objet "clients" (numéro de page, nombre de clients par page, nombre total de pages)
    clients.page = page;
    clients.number = number;
    clients.totalPages = Math.ceil(clients.total / number); //si la division est decimale, renvoie nbr par exces 

    return clients;
},

// Méthode pour ajouter un utilisateur
addUser : function(user){
    data.addUser(user);
    return { success: true, message: "Utilisateur ajouté avec succès." };
},

// Méthode pour modifier un utilisateur
updateUser : function(user){
    let nb = data.updateUser(user);
    if(nb) return { success: true, message: "Utilisateur modifié avec succès." };
    else return { success: false, message: "Erreur lors de la modification du client." };
},

// Méthode pour supprimer un utilisateur
removeUser : function(user){
    let nb = data.removeUser(user);
    if(nb) return { success: true, message: "Utilisateur supprimé avec succès." };
    else return { success: false, message: "ID d'utilisateur non trouvé." };
}
};

// Exportation de l'objet "business" pour être utilisé dans d'autres fichiers
module.exports = business;