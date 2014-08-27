requirejs.config({
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    },
    paths: {
        requirejs: "lib/requirejs/require",
        bootstrap: "lib/bootstrap/bootstrap",
        jquery: "lib/jquery/jquery"
    },
    priority: [
        "jquery"
    ]
});