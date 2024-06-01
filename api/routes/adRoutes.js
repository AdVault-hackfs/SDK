const express = require('express');
const router = express.Router();
const adController = require('../controller/adcontroller');

router.get('/:id', adController.getAdById);
router.get('/', adController.getAllAds);

module.exports = router;
