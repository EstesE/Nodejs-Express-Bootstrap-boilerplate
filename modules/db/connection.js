var mongoose    = require('mongoose');
var connection;

exports.connect = function(callback){
    console.log('Connecting to mongodb...');
    if (connection != null && connection.readyState === 1) {
        if (callback) callback();
        return;
    }

    // Local hosted MongoDB
    mongoose.connect('mongodb://localhost:27017/test');

    // Remote hosted MongoDB (https://mongolab.com/)
    //mongoose.connect('mongodb://******:******@ds******.mongolab.com:*****/******);

    connection = mongoose.connection;

    connection.on('error', function (err) {
        if (callback) callback(err);
        //log.error('connection error:', err.message);
    });

    connection.on('open', function () {
        if (callback) callback();
        //log.info("Connected to DB!");
    });
};

exports.getState = function(){
    //0 = disconnected
    //1 = connected
    //2 = connecting
    //3 = disconnecting

    return connection.readyState;
}

exports.disconnect = function(){
    connection.disconnect();
}