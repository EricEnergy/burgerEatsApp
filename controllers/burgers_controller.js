var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        req.body.burger_name
    ], function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log("condition", req.params);
    burger.update(req.params.id, function (result) {
        res.json(result)
    });
});

router.delete('/api/burgers/:id', function (req, res) {
    var id = req.params.id;
    burger.delete(id, function (result) {
        res.json(result);
    });
});
module.exports = router;