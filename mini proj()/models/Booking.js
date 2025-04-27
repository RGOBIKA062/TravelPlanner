const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    destination: String,
    amountPerDay: Number,
    numberOfTravelers: Number,
    fromDate: Date,
    toDate: Date,
    totalDaysNights: Number,
    travelType: String,
    totalAmount: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
