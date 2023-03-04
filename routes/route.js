module.exports = (app) =>{
    const jeuRouter = require('./jeu_route');
    const typeJeuRouter = require('./typeJeu_route');
    const zoneRouter = require('./zone_route');
    const utilisateurRouter = require('./utilisateur_route');
    const attributionRouter = require('./attribution_route');

    app.use('/jeux', jeuRouter);
    app.use('/typeJeux', typeJeuRouter);
    app.use('/zones', zoneRouter);
    app.use('/utilisateurs', utilisateurRouter);
    app.use('/attributions', attributionRouter);
}