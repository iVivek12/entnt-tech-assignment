const Company = require('../models/Company');

// Get all companies
const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a company
const addCompany = async (req, res) => {
    try {
        const { name, address, phone, linkedInProfile, emails, phoneNumbers, comments, communicationPeriodicity } = req.body;

        // Validate input
        if (!name || !address || !phone) {
            return res.status(400).json({ message: 'Name, address, and phone are required' });
        }

        const newCompany = new Company({
            name,
            address,
            phone,
            linkedInProfile,
            emails,
            phoneNumbers,
            comments,
            communicationPeriodicity
        });

        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a company
const updateCompany = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Find the company by ID and update it
        const updatedCompany = await Company.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }

        res.json(updatedCompany);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a company
const deleteCompany = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the company by ID and delete it
        const deletedCompany = await Company.findByIdAndDelete(id);

        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }

        res.json({ message: 'Company deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getCompanies,
    addCompany,
    updateCompany,
    deleteCompany
};
