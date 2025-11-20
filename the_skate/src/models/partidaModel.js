var database = require("../database/config")

function cadastrarPartida(fkUsuario, quantidade_manobras, acertos, manobra_forte) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPartida():", fkUsuario, quantidade_manobras, acertos, manobra_forte);
        
        
        var instrucaoSql = `
            INSERT INTO partida (fkUsuario, quantidade_manobras, acertos, manobra_forte) VALUES (${fkUsuario}, ${quantidade_manobras}, ${acertos}, '${manobra_forte}');`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

function buscarPartida(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPartida():", fkUsuario);
        
        
        var instrucaoSql = `
            SELECT * FROM partida WHERE fkUsuario = ${fkUsuario}`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

module.exports = {
    cadastrarPartida,
    buscarPartida
};