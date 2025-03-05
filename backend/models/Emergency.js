const mongoose = require('mongoose');

const emergencySchema = mongoose.Schema(
    {
        type: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, default: 'pending' },
        volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Emergency', emergencySchema);
