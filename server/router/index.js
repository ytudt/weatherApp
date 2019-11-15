const wetherRouter = require('./wether');
const cityRouter = require('./city');


function registerRouter (app){
    app.use('/api/wether', wetherRouter);
    app.use('/api/city', cityRouter);
}

module.exports = registerRouter;