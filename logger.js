const fs = require("fs");
const express = require('express');
const router = express.Router();

const myFunctions = require('./logic');
const jsonMethod = myFunctions.JSONFabric;
const csvMethod = myFunctions.CSVFabric;
const xmlMethod = myFunctions.XMLFabric;
const yamlMethod = myFunctions.YAMLFabric;

const user = {name: "John", age: 24, gender: "male"};

router.get('/user.json', function (req, res) {

    res.setHeader('Content-Type', 'text/json');
    res.send(new jsonMethod().createContent(user));

});

router.get('/user.csv', function (req, res) {

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'download-' + Date.now() + '.csv\"');
    res.send(new csvMethod().createContent(user));

});

router.get('/user.xml', function (req, res) {

    res.setHeader('Content-Type', 'text/xml');
    res.send(new xmlMethod().createContent(user));

});

router.get('/user.yaml', function (req, res) {

    res.setHeader('Content-Type', 'text/yaml');
    res.setHeader('Content-Disposition', 'attachment; filename=\"' + 'download-' + Date.now() + '.yaml\"');
    res.send(new yamlMethod().createContent(user));

});

module.exports = router;