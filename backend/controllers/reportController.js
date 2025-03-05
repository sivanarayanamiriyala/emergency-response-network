const Report = require('../models/Report');

// Get all reports
exports.getAllReports = async (req, res) => {
    try {
        const reports = await Report.find().populate('userId', 'name email');
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new report
exports.createReport = async (req, res) => {
    const { type, location, description } = req.body;
    const userId = req.user._id;

    try {
        const report = await Report.create({ userId, type, location, description });
        res.status(201).json({ message: 'Report created successfully', report });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getReportById = async (req, res) => {
    try {
        const report = await Report.findById(req.params.id).populate('userId', 'name email');
        
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};