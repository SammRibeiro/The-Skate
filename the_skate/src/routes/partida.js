var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");


router.post("/cadastrar", function (req, res) {
    partidaController.cadastrarPartida(req, res);
})

router.post("/buscar", function (req, res) {
    partidaController.buscarPartida(req, res);
})

module.exports = router;