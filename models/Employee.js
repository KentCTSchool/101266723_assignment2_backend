const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please enter firstname'],
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    required: [true, 'Please enter firstname'],
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: [true, 'Please enter firstname'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    trim: true,
    lowercase: true
  },
});

const Employee = mongoose.model("employee", EmployeeSchema);
module.exports = Employee;