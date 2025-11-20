
var partidaModel = require("../models/partidaModel");

function cadastrarPartida(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var quantidade_manobras = req.body.quantidade_manobrasServer;
    var acertos = req.body.acertosServer;
    var manobra_forte = req.body.manobra_forteServer;


    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Sua fkUsuario está undefined!");
    } else if (quantidade_manobras == undefined) {
        res.status(400).send("Sua quantidade_manobras está undefined!");
    } else if (acertos == undefined) {
        res.status(400).send("Seu acertos está undefined!");
    } else if (manobra_forte == undefined) {
        res.status(400).send("Sua manobra_forte está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        partidaModel.cadastrarPartida(fkUsuario, quantidade_manobras, acertos, manobra_forte)
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

module.exports = {
    cadastrarPartida
};