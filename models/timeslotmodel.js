const mongoose = require('mongoose');

const timeslotSchema = new mongoose.Schema({
  applicant_name:{
    type:String,
    required:true
  },
  role:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
    },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  createdBy: { type:String, required: true },
});

module.exports = mongoose.model('Timeslot', timeslotSchema);
