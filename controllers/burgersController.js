const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (burgerdata) {
        res.render("index", {burgerdata: burgerdata});
    });
});

router.post("/burgers/create", function(req,res) {
    burger.create(req.body.burgername, function(result) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req,res) {
    burger.update(req.params.id, function(result) {
        res.sendStatus(200)
    });
});

module.exports = router; 