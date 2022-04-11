#!/usr/bin/env nodejs
require('isomorphic-fetch');
const dotenv = require('dotenv');
dotenv.config();
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();
const router = require("./routes");
const {
    PORT
} = process.env;

app.use(async (ctx, next) => {
    if (ctx.path === '/graphql') {
        return await next();
    }
    await koaBody({includeUnparsed: true})(ctx, next);
});
app.use(router())
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});