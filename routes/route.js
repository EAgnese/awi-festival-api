module.exports = (app) =>{
    const jeuRouter = require('./jeu_route');
    const typeJeuRouter = require('./typeJeu_route');
    const zoneRouter = require('./zone_route');
    const utilisateurRouter = require('./utilisateur_route');
    const attributionZoneRouter = require('./attributionZone_route');

    app.use('/jeux', jeuRouter);
    app.use('/typesJeux', typeJeuRouter);
    app.use('/zones', zoneRouter);
    app.use('/utilisateurs', utilisateurRouter);
    app.use('/attributionsZone', attributionZoneRouter);
}