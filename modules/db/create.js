var connection = require('./connection');
var vehicle = require('../../models/vehicle').model;

exports.createVehicles = function () {
    console.log('Creating test vehicles...');

    if (connection.getState() === 1) {
        vehicle.update(
            { make: 'Jeep' },
            { make: 'Jeep', model: 'CJ7' },
            { upsert: true },
            function () {
            }
        );
    }

    if (connection.getState() === 1) {
        vehicle.update(
            { make: 'Toyota' },
            { make: 'Toyota', model: 'Tacoma' },
            { upsert: true },
            function () {
            }
        );
    }

    if (connection.getState() === 1) {
        vehicle.update(
            { make: 'BMW' },
            { make: 'BMW', model: 'i5' },
            { upsert: true },
            function () {
            }
        );
    }

}
