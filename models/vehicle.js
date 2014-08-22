var mongoose = require('mongoose');
var schema = mongoose.Schema;
var vehicle = require('./vehicle').schema;


var vehicleSchema = new schema({
    make: String,
    model: String
});

module.exports.schema = vehicleSchema;
module.exports.model = mongoose.model('vehicles', vehicleSchema, 'vehicle');