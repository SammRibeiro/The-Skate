var express = require("express");
var router = express.Router();

var partidaController = require("../controllers/partidaController");


router.post("/cadastrar", function (req, res) {
    partidaController.cadastrarPartida(req, res);
})

router.post("/buscar", function (req, res) {
    partidaController.buscarPartida(req, res);
})

router.get("/count/:idUsuario", function (req, res) {
    partidaController.count(req, res);
})

router.get("/manobraforte/:idUsuario", function (req, res) {
    partidaController.manobraForte(req, res);
})

router.get("/buscarRecorde/:idUsuario", function (req, res) {
    partidaController.buscarRecorde(req, res);
})

module.exports = router;