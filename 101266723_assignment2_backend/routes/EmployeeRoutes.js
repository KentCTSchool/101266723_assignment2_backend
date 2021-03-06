const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Converting all request to json
app.use(express.json());

//Read ALL
app.get('/api/v1/employees', async (req, res) => {
  const employees = await employeeModel.find({});
  try {
    res.send(employees);
    // res.status(200).send('OK');
  } catch (err) {
    res.status(500).send(err);
  }
});

//Getting one employee
app.get('/api/v1/employee/:id', async (req, res) => {
  const employees = await employeeModel.findById(req.params.id, req.body);
  try {
    res.send(employees);
    // res.status(200).send("OK");
  } catch (err) {
    res.status(500).send(err);
  }
});

//create Employee
app.post('/api/v1/employee', async (req, res) => {
    const employee = new employeeModel(req.body);
    try {
      await employee.save();
      res.status(201).send('Created');
      // res.send(employee);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//Update Record
app.put('/api/v1/employee/:id', async (req, res) => {
  try {
    await employeeModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send("OK");
  } catch (err) {
    res.status(500).send(err)
  }
})

//Delete Record
//localhost:8081/employee/5d1f6c3e4b0b88fb1d257237
app.delete('/api/v1/employee/:id', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndDelete(req.params.id)
  
      if (!employee) res.status(204).send("No Content")
      res.status(200).send("Successfully Deleted")
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app