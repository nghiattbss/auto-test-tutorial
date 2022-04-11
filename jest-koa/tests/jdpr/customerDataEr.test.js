require('isomorphic-fetch');
const gdpr = require("../../api").gdpr;
const ctx = {

}
test('#shopDataEr Must be success', async () => {
    await gdpr.shopDataEr(ctx);
    expect(ctx.body.status).toBe("success");
});

