module.exports = (app) =>{
    const benevoleRouter = require('./benevole_route');
    const jeuRouter = require('./jeu_route');
    const typeJeuRouter = require('./typeJeu_route');
    const zoneRouter = require('./zone_route');
    const utilisateurRouter = require('./utilisateur_route');


    app.use('/benevoles', benevoleRouter);
    app.use('/jeux', jeuRouter);
    app.use('/typesJeux', typeJeuRouter);
    app.use('/zones', zoneRouter);
    app.use('/utilisateurs', utilisateurRouter);
}