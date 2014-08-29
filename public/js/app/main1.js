define(function (require) {
    console.log('main1');

    var $ = require('jquery');
    var jQuery = require('jquery');
    var jqueryui = require('jqueryui');
    var notify = require('jquerynotify');

    console.log($);
    console.log(jQuery);
    console.log(jqueryui);
    console.log(notify);
});




//define(['jquery', 'jqueryui', 'jquerynotify'], function ($) {
//});