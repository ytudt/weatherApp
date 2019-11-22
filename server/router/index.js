const wether = require('./wether');
const city = require('./city');

const Router = require('koa-router');
const router = new Router();

router.use('/api/wether', wether.routes(), wether.allowedMethods());
router.use('/api/city', city.routes(), city.allowedMethods());

module.exports = router;