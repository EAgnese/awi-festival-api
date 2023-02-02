module.exports = (app) =>{
    const controllerVaisseau = require('./controller/controllerVaisseau')
    const controllerUtilisateur = require('./controller/controllerUtilisateur')
    const controllerCategorie = require('./controller/controllerCategorie')
    const controllerAchat = require('./controller/controllerAchat')
    const controllerCommande = require('./controller/controllerCommande')
    const middlewareUtilisateur = require('./middleware/utilisateur.js');

    //routes pour les vaisseaux
    app.get('/',controllerVaisseau.selectAll)

    app.post('/vaisseau',controllerVaisseau.selectVaisseauByID)

    app.delete('/vaisseau/delete',middlewareUtilisateur.verifAdmin,controllerVaisseau.deleteVaisseau)
    
    app.post('/vaisseau/creation',controllerVaisseau.createVaisseau)

    app.put('/vaisseau/update',middlewareUtilisateur.verifAdmin,controllerVaisseau.updateByID)

    // route pour les utilisateurs
    app.get('/utilisateur',middlewareUtilisateur.verifAdmin,controllerUtilisateur.selectAll)

    app.post('/utilisateur',middlewareUtilisateur.connecte,controllerUtilisateur.selectUtilisateurByID)

    app.delete('/utilisateur/delete',middlewareUtilisateur.connecte,controllerUtilisateur.deleteUtilisateur)

    app.put('/utilisateur/update',middlewareUtilisateur.connecte,controllerUtilisateur.updateByID)

    //route connexion/authentification

    app.post("/utilisateur/inscription",middlewareUtilisateur.verification,controllerUtilisateur.inscription)

    app.post('/utilisateur/connexion',controllerUtilisateur.connexion)    

    // route pour les catégories
    app.get('/categorie',controllerCategorie.selectAll)
 
    app.post('/categorie',controllerCategorie.selectCategorieByID)
 
    app.delete('/categorie/delete',middlewareUtilisateur.verifAdmin,controllerCategorie.deleteCategorie)
     
    app.post('/categorie/creation',middlewareUtilisateur.verifAdmin,controllerCategorie.createCategorie)
 
    app.put('/categorie/update',middlewareUtilisateur.verifAdmin,controllerCategorie.updateByID)

    app.post('/categorie/vaisseau',controllerCategorie.selectCategorieByIdVaisseau)

    app.delete('/categorie/vaisseau/delete',middlewareUtilisateur.verifAdmin,controllerCategorie.deleteCategorieByIDVaisseau)

    //route pour les achats
    app.post('/achat/creation',middlewareUtilisateur.connecte,controllerAchat.createAchat)   

    //route pour les commandes
    app.post('/commande',middlewareUtilisateur.connecte,controllerCommande.selectCommandeByID) 

    app.get('/commande',middlewareUtilisateur.verifAdmin,controllerCommande.selectAll)     

    app.post('/commande/creation',middlewareUtilisateur.connecte,controllerCommande.createCommande)    
    
}