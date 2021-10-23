const fs = require('fs');
const path = require('path');

const controller = {

    // Root - MAIN
    index: (req, res) => {
        // Do the magic
        return res.render('index', {
        });
    },
    // SERVICES
    services: (req, res) => {
        // Do the magic
        return res.render('services', {
        });
    },
    // ADMIN
    admin: (req, res) => {
        // Do the magic
        return res.render('admin', {
            adminUser: req.query.user,
        });
    },

}


module.exports = controller;