module.exports = (app) =>{
    const benevolesRouter = require('./benevoles_route');
    const jeuxRouter = require('./jeux_route');
    const zonesRouter = require('./zones_route');
    const jeuTypesRouter = require('./types_jeu_route');
    const affectationsRouter = require('./affectations_route');

    app.use('/benevoles', benevolesRouter);
    app.use('/jeux', jeuxRouter);
    app.use('/zones', zonesRouter);
    app.use('/types_jeu', jeuTypesRouter);
    app.use('/affectationss', affectationsRouter);
}