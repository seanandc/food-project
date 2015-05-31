var express = require('express');
var truckRoutes= require('./routes/truckRoutes');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var db = mongoose.connect('mongodg://localhost/foodTruckAPI');

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/trucks', truckRoutes);

app.listen(port, function () {
	console.log('listening on port ', port );
});