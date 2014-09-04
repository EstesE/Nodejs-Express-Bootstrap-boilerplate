//define(function (require) {
//    console.log('main1');
//});

//
//define(['jquery', 'jquery-ui', 'jquery-notify'], function() {
//    var initialize = function() {
//
//
//
//    };
//
//    return {
//        Initialize: initialize
//    }
//});


function create( template, vars, opts ){
    return $container.notify("create", template, vars, opts);
}

$(function(){
    // initialize widget on a container, passing in all the defaults.
    // the defaults will apply to any notification created within this
    // container, but can be overwritten on notification-by-notification
    // basis.
    $container = $("#container").notify();

    // create two when the pg loads
    create("default", { title:'Default Notification', text:'Example of a default notification.  I will fade out after 5 seconds'});
    create("sticky", { title:'Sticky Notification', text:'Example of a "sticky" notification.  Click on the X above to close me.'},{ expires:false });

    // bindings for the examples
    $("#default").click(function(){
        create("default", { title:'Default Notification', text:'Example of a default notification.  I will fade out after 5 seconds'});
    });

    $("#sticky").click(function(){
        create("sticky", { title:'Sticky Notification', text:'Example of a "sticky" notification.  Click on the X above to close me.'},{ expires:false });
    });

    $("#warning").click(function(){
        create("withIcon", { title:'Warning!', text:'OMG the quick brown fox jumped over the lazy dog.  You\'ve been warned. <a href="#" class="ui-notify-close">Close me.</a>', icon:'alert.png' },{
            expires:false
        });
    });

    $("#themeroller").click(function(){
        create("themeroller", { title:'Warning!', text:'The <code>custom</code> option is set to false for this notification, which prevents the widget from imposing it\'s own coloring.  With this option off, you\'re free to style however you want without changing the original widget\'s CSS.' },{
            custom: true,
            expires: false
        });
    });

    $("#clickable").click(function(){
        create("default", { title:'Clickable Notification', text:'Click on me to fire a callback. Do it quick though because I will fade out after 5 seconds.'}, {
            click: function(e,instance){
                alert("Click triggered!\n\nTwo options are passed into the click callback: the original event obj and the instance object.");
            }
        });
    });

    $("#buttons").click(function(){
        var n = create("buttons", { title:'Confirm some action', text:'This template has a button.' },{
            expires:false
        });

        n.widget().delegate("input","click", function(){
            n.close();
        });
    });

    // second
    var container = $("#container-bottom").notify({ stack:'above' });
    container.notify("create", {
        title:'Look ma, two containers!',
        text:'This container is positioned on the bottom of the screen.  Notifications will stack on top of each other with the <code>position</code> attribute set to <code>above</code>.'
    },{ expires:false });

    container.notify("widget").find("input").bind("click", function(){
        container.notify("create", 1, { title:'Another Notification!', text:'The quick brown fox jumped over the lazy dog.' });
    });

    // third
    var container = $("#container-bottom-right").notify();
    $("#queue").click(function(){
        container.notify("create", "queueing", {
            title:'Queueing', text:'Example of a notification with queuing.  For this container, no more than three notifications of this type will be visible at one time.'
        }, { queue: 3 });
    });
});