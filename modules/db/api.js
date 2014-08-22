var connection = require('./connection');
var vehicle = require('../../models/vehicle').model;
var create = require('./create');

exports.getVehicle = function(v, callback) {

    if (connection.getState() === 1) {
        vehicle.findOne({
            model: v
        }, function(err, vehicle) {
            if (!err && !vehicle) {
                // createVehicles
                create.createVehicles(vehicle);
            }
            if (callback) {
                callback(err, vehicle);
            }
        });
    } else {
        if (callback) callback({
            message: 'Mono connection is closed'
        }, null);
    }
}

exports.getVehicles = function(opts, callback) {
    if (connection.getState() === 1) {
        vehicle.find(opts).sort({
            make: 'desc'
        }).exec(function(err, vehicles){
            if (callback) callback(err, vehicles);
        });
    } else {
        if (callback) callback({
            message: 'Mono Connection is closed'
        }, null);
    }
}
