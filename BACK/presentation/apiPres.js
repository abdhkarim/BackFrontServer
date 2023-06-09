const express = require('express');
const business = require('../business/business');
const app = express();
var cors = require('cors');

const apiServ = {
    
    //fct qui recupere les données et les renvoie au path indiqué
    start : function(port) {

        app.use(express.json()); 
        
        app.use(cors()); 
        
        app.get('/api/Allcustomers', (req,res) => {   
            
            const clients = business.getAllClients();

            //transforme en flux lisible par le navigateur
            res.status(200).json(clients);
        })

        //req reprend les donnees fournies par la requete
        app.get('/api/customers', (req,res) => {   
            
            const number = req.query.number;
            const page = req.query.page;
            const clients = business.getClients(number, page);

            //transforme en flux lisible par le navigateur
            res.status(200).json(clients);
        })

        //ajoute un user
        app.post('/api/customers', (req, res) => {
            console.log(req.body);
            let message = business.addUser(req.body);
            res.status(200).send(message);
        })
        
        // Modifie un client
        app.put('/api/UpdateCustomers', (req, res) => {
            let message = business.updateUser(req.body);
            res.status(200).send(message);
        })

        // Supprime un client
        app.delete('/api/DeleteCustomers', (req, res) => {
            const clientid = req.query.id;
            let message = business.removeUser(clientid);
            res.status(200).send(message);
        })
        
        //lance l'ecoute
        app.listen(port, () => {
            console.log(`Serveur du Back lancé sur le port ${port}`)
        }) 
    }

};

module.exports = apiServ;