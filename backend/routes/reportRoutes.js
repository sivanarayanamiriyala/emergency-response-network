const express = require('express');
const { getAllReports, createReport,getReportById } = require('../controllers/reportController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', protect, getAllReports);
router.post('/create', protect, createReport);
router.get('/:id', protect, getReportById);

module.exports = router;
