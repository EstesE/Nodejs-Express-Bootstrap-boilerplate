requirejs.config({
    //baseUrl: 'js/lib',
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
            deps: ['jquery-ui'],
            exports: 'jquerynotify'
        },
        'main1': {
            deps: ['jquery', 'jqueryui', 'jquerynotify'],
            exports: 'main1'
        }
    },
    paths: {
        app: '/app',
        main1: 'app/main1',
        main2: 'app/main2',
        requirejs: 'lib/requirejs/require',
        jquery: 'lib/jquery/jquery',
        bootstrap: 'lib/bootstrap/bootstrap',
        jqueryui: 'lib/jqueryui/jquery-ui',
        jquerynotify: 'lib/jqueryui/jquery.notify'
    },
    priority: [
        'jquery'
    ]
});

//require(['app/main1'])