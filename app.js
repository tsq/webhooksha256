const crypto = require("crypto");
const sigHeaderName = "x-hub-signature-256";

module.exports = (secret) => (req, res, next) => {
    const signature = req.headers[sigHeaderName];
    const payload = req.body;
    const hash = crypto.createHmac("sha256", secret);
    hash.update(JSON.stringify(payload));
    const code = hash.digest("hex");
    const result = "sha256=" + code;
    if (signature === result) {
        next();
    } else {
        next("signature is wrong");
    }
}