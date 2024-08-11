
const mongoose = require('mongoose');

const express = require('express');

require('dotenv').config();

const Customer = require('./models/customer.js');

const app = express();


app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.render("home.ejs")
});


app.get("/customer", async (req, res) => {
    try{
        const x = await Customer.find({})
        console.log({cust : x})
        res.render('customerpage.ejs', {cust : x})
    }catch (err){
        res.status(400).json(err)
    }
});

app.post('/customer', async (req, res) => {
    try{
        req.body.duration = parseInt(req.body.duration)
        await Customer.create(req.body)
        res.redirect('/customer')
        console.log(req.body)
    }catch (err){
        res.status(400).json(err)
    }
});

app.get("/customer/new", (req, res) => {
    res.render('customer.ejs')
})

app.get("/main", (req, res) => {
    res.render('main.ejs')
})

app.delete('/customer/:id', async (req, res) => {
    try{
        res.json(await Customer.findByIdAndDelete(req.params.id))
    }catch(err){
        res.status(400).json(err)
    }
});

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
});
