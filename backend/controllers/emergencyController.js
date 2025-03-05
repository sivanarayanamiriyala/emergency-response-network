const Emergency = require('../models/Emergency');

// Get all emergencies
exports.getAllEmergencies = async (req, res) => {
    try {
        const emergencies = await Emergency.find().populate('volunteerId', 'name email');
        res.status(200).json(emergencies);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Report an emergency
exports.reportEmergency = async (req, res) => {
    const { type, location, description } = req.body;

    try {
        const emergency = await Emergency.create({ type, location, description });
        res.status(201).json({ message: 'Emergency reported successfully', emergency });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
