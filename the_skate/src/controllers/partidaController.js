
var partidaModel = require("../models/partidaModel");

function cadastrarPartida(req, res) {

    var fkUsuario = req.body.fkUsuarioServer;
    var quantidade_manobras = req.body.quantidade_manobrasServer;
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var manobra_forte = req.body.manobra_forteServer;



    if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else if (quantidade_manobras == undefined) {
        res.status(400).send("Sua quantidade_manobras está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    } else if (erros == undefined) {
        res.status(400).send("Seu erros está undefined!");
    } else if (manobra_forte == undefined) {
        res.status(400).send("Sua manobra_forte está undefined!");
    }
    else {


        partidaModel.cadastrarPartida(fkUsuario, quantidade_manobras, acertos, erros, manobra_forte)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarPartida(req, res) {

    var fkUsuario = req.body.fkUsuarioServer;

    if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else {


        partidaModel.buscarPartida(fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao buscar a partida! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function count(req, res) {

    var idUsuario = req.params.idUsuario;


    partidaModel.count(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar o total! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function manobraForte(req, res) {
    var idUsuario = req.params.idUsuario;


    partidaModel.manobraForte(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar a manobra forte! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarRecorde(req, res) {
    var idUsuario = req.params.idUsuario;


    partidaModel.buscarRecorde(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao buscar o recorde! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrarPartida,
    buscarPartida,
    count,
    manobraForte,
    buscarRecorde
};