const combineRouters = require('koa-combine-routers');
const gdprRouter = require("./gdprRouter");
const router = combineRouters(
    gdprRouter,
)
module.exports = router;