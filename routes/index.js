var express = require('express');
var router = express.Router()
var api = require('../modules/db/api');
var async = require('async');

/* GET home page. */
router.get('/', function (req, res) {
    async.parallel({
            // Get all the vehicles
            vehicles: function (callback) {
                api.getVehicles(null, function (e, vehicles) {
                    callback(null, vehicles);
                });
            },
            // Get one vehicle...the 'i5'
            vehicle: function (callback) {
                api.getVehicle('i5', function (e, vehicle) {
                    callback(null, vehicle);
                });
            }
        },
        function (err, results) {
            console.log(results);
            if (typeof err === 'undefined') {
                res.render('index',
                    {
                        title: 'Express/Less Boilerplate',
                        vehicle: results.vehicle,
                        vehicles: results.vehicles
                    });
            } else {
                res.render('error');
            }
        });

});

module.exports = router;
