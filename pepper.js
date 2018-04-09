import $ from "jquery";

var session;
try {
    QiSession(function (s) {
        console.log("connected");
        session = s;

        session.service("ALMemory").then(function (ALMemory) {
            ALMemory.subscriber("CustomDebug").then(function (subscriber) {
                subscriber.signal.connect(function (value) {
                        $('#debugger').html(value);
                });
            });
        });
    }, function (error) {
        console.log(error);
    });
} catch (err) {
    console.log("Error when initializing QiSession: " + err.message);
}


var raiseEvent = function (eventName, data) {
    console.log("Raised event : " + eventName + " data : " + data);
    session.service("ALMemory").then(function (memory) {
        memory.raiseEvent(eventName, data);
    }, function (error) {
        console.log("Could not raise event: " + error.message);
    });
}