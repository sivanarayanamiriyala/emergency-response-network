const Alert = require('../models/alertModel');  // If you plan to create an alert schema.

// Get Alerts
const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find({ location: req.params.location });
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getAlerts };
