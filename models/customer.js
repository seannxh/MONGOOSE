const mongoose = require('./connection.js')

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    password: String
})

const Customer = mongoose.model("customerdb", customerSchema);

module.exports = Customer