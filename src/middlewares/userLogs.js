const fs = require('fs');
const path = require('path');
function userLogs(req, res, next) {
    let userLogsPath = path.join(__dirname, '../logs/userLogs.txt')
    fs.appendFileSync(userLogsPath, 'El usuario ingresó a la ruta: ' + req.url + `\n`);
    next();
}

module.exports = userLogs;
