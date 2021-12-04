const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://tenten25:Magaaralak0@mydb.cpkfa.mongodb.net/101266723_assignment2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});           

app.use(employeeRouter);

app.listen(9090, () => { console.log('Server is running...') });