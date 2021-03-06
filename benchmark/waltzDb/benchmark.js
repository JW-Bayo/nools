"use strict";
var data = require("./data"),
    nools = require("../../index");

var flow = nools.compile(__dirname + "/waltzDb.nools");
var items = data.load(flow).waltzdb8;
var session = flow.getSession.apply(flow, items);
session.assert(new (flow.getDefined("stage"))({value: "DUPLICATE"}));
var start = new Date();
session.match(function (err) {
    if (err) {
        console.log(err.stack);
    } else {
        console.log("Duration %dms", new Date() - start);
    }
});

