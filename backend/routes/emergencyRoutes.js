const express = require('express');
const { getAllEmergencies, reportEmergency } = require('../controllers/emergencyController');
const router = express.Router();

router.get('/', getAllEmergencies);
router.post('/report', reportEmergency);

module.exports = router;
