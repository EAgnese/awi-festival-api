module.exports = (app) =>{
    const benevolesRouter = require('./benevoles_route');
    const jeuxRouter = require('./jeux_route');

    app.use('/benevoles', benevolesRouter);
    app.use('/jeux', jeuxRouter);
}