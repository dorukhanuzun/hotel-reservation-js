// You need to define the schema for a reservation
// The fields you require are:
// associated user
// numOfOccupants (number of occupants)
// roomType (options are 'single bed', 'double bed', 'queen', 'king')
// checkIn (just date, not time)
// checkOut (just date, not time)

const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  numOfOccupants: {
    type: Number,
    required: true
  },
  roomType: {
    type: String,
    enum: ['Single Bed', 'Double Bed', 'Queen', 'King'],
  },
  checkIn: {
    required: true,
    type: Date,
    get: value => value.toDateString()
  },
  checkOut: {
    required: true,
    type: Date,
    get: value => value.toDateString()
  }
});

module.exports = mongoose.model('Reservation', ReservationSchema);