const express = require('express');
const router = express.Router();
const CommunicationMethod = require('../models/CommunicationMethod');

// Get all communication methods
router.get('/', async (req, res) => {
  try {
    const methods = await CommunicationMethod.find();
    res.json(methods);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Add a new communication method
router.post('/', async (req, res) => {
  try {
    const newMethod = new CommunicationMethod(req.body);
    await newMethod.save();
    res.status(201).json(newMethod);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
