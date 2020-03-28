const crypto  = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}

//no node não é export default function, mas sim da forma escrita acima^