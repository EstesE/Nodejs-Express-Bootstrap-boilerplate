requirejs.config({
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'jquery-ui': {
            deps: ['jquery'],
            exports: 'jquery-ui'
        },
        'jquery-notify': {
            deps: ['jquery'],
            exports: 'notify'
        }
//        'main1': {
//            deps: ['jquery', 'jqueryui', 'jquerynotify'],
//            exports: 'main1'
//        }
    },
    paths: {
        'app': '/app',
        'main1': 'app/main1',
        'main2': 'app/main2',
        'requirejs': 'lib/requirejs/require',
        jquery: 'lib/jquery/jquery',
        'bootstrap': 'lib/bootstrap/bootstrap',
        'jquery-ui': 'lib/jqueryui/jquery-ui',
        'jquery-notify': 'lib/jqueryui/jquery.notify'
    },
    priority: [
        'jquery'
    ]
});

//require(['app/main1'])