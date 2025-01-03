// models/Company.js
const mongoose = require('mongoose');

const CommunicationSchema = new mongoose.Schema({
  type: String,
  date: Date,
  notes: String,
  highlight: { type: String, default: 'upcoming' },
});

const CompanySchema = new mongoose.Schema({
  name: String,
  location: String,
  linkedInProfile: String,
  emails: [String],
  phoneNumbers: [String],
  comments: String,
  communicationPeriodicity: { type: Number, default: 14 }, // Default periodicity
  communications: [CommunicationSchema], // Embedded communications
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
