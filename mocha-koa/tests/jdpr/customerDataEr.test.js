const assert = require('assert');
require('isomorphic-fetch');
const gdpr = require("../../api").gdpr;
const ctx = {

}
describe('GDPR Testing', function () {
    describe("#customerDataEr", function () {
        it('Must be success', async function () {
            await gdpr.customerDataEr(ctx);
            assert.equal(ctx.body.status, "success");
        })
    })
    describe("#shopDataEr", function () {
        it('Must be success', async function () {
            await gdpr.shopDataEr(ctx);
            assert.equal(ctx.body.status, "success");
        })
    })
})
