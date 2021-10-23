// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const adminOnly = require('../middlewares/adminOnly');
// ************ Controller Require ************
const { index, services, admin } = require('../controllers/mainController');

/*** GET MAIN ***/
router.get('/', index);
router.get('/services', services);
router.get("/admin", adminOnly, admin);



module.exports = router;

