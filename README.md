# Nom : ABDALLAH Karim
                 ____________________
                 |  I - Consigne   |
                 ____________________

Concernant le projet de Frontend Il doit comporter des écrans permettant de : 
    Consulter la liste des clients 
    Ajouter un client 
    Modifier un client 
    Supprimer un client 
    Voir les statistiques de la base de client Exemple : la répartition par pays ou société en représentation graphique(bonus) 

ed
Le projet FrontEnd comporte un serveur web qui permet de lancer l'application web. La partie écran peut être développée en javascript JQuery L'application Front End appelle directement le projet BackEnd pour en récupérer et envoyer les données.


Un projet BackEnd : Il expose une API permettant de : 
    Lister les clients 
    Ajouter un client 
    Modifier un client 
    Supprimer un client 
    (bonus) récupérer les statistiques 
    Il est possible de faire les mêmes actions en ligne de commande 
    Au démarrage de l'application, on peut choisir en passant en paramètre un stockage en fichier ou en BDD (en utilisant https://cloud.mongodb.com/ par exemple).

Le projet BackEnd doit être structuré avec un découpage logique tel que étudié en cours. Les 2 projets doivent utiliser eslint, avec un fichier package.json pour pouvoir installer les dépendances.

Chaque projet doit être sur github, avec une explication dans le Readme pour en expliquer le déploiement. (merci d'en faire le test avant pour vous assurer du bon fonctionnement). Les liens doivent être mis dans le fichier suivant : Et les droits en accès doivent être donné à manoel.deligny@gmail.com Le git ne doit pas comporter les librairies utilisées dans le projet. Le git doit comporter l’historique des push et commits pour voir l’évolution de vos applications.

Le contrôle des champs doit être fait autant dans le FrontEnd que dans l'API du BackEnd.

________________________________________________________

                _______________________________
                 |  II - Tuto et explication  |
                 ______________________________

Pour que cela fonctionne je vous fait un tutoriel :

    1 - Munissez vous de mon code 
    2 - Ouvrez deux terminaux afin de lancer les 2 serveurs 
        a) Pour lancer le serveur du front : 
            -> cd FRONT
            -> node server.js
                    SERVEUR LANCE
        
        b) Pour lancer le serveur du back :
            -> cd BACK
            -> node script.js
                    SERVEUR LANCE

    3 - Les 2 serveurs étant lancés sur les ports 3000 et 3001 de votre machine, faites sur la barre de recherche de votre navigateur : localhost:3000
    4 - Vous tomberez alors sur l'index.html

ENJOY !
______________________________________________________