const Router = require('koa-router');
const gdprApi = require("../api").gdpr;

const gdprRouter = new Router({ prefix: '/gdpr' })

gdprRouter.post("/shop-data", (ctx) => gdprApi.shopDataEr(ctx));
gdprRouter.post("/customer-data", (ctx) => gdprApi.customerDataEr(ctx));
gdprRouter.post("/customer-data-rq", (ctx) => gdprApi.customerDataRq(ctx));

module.exports = gdprRouter;