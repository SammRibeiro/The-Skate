
var database = require("../database/config")

function cadastrarPartida(fkUsuario, quantidade_manobras, acertos, erros, manobra_forte) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPartida():", fkUsuario, quantidade_manobras, acertos, manobra_forte);


    var instrucaoSql = `
            INSERT INTO partida (fkUsuario, quantidade_manobras, acertos, erros, manobra_forte) VALUES (${fkUsuario}, ${quantidade_manobras}, ${acertos}, ${erros}, '${manobra_forte}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPartida(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPartida():", fkUsuario);


    var instrucaoSql = `
            SELECT * FROM partida WHERE fkUsuario = ${fkUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function count(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPartida():", idUsuario);


    var instrucaoSql = `
            SELECT count(*) as TotalPartidas FROM partida WHERE fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function manobraForte(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPartida():", idUsuario);


    var instrucaoSql = `
            SELECT manobra_forte, count(*) as vezes FROM partida WHERE fkUsuario = ${idUsuario} GROUP BY manobra_forte ORDER BY vezes DESC LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRecorde(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPartida():", idUsuario);


    var instrucaoSql = `
            SELECT MAX(acertos) as recorde, dt_sessao FROM partida WHERE fkUsuario = ${idUsuario} GROUP BY dt_sessao ORDER BY recorde DESC LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarPartida,
    buscarPartida,
    count,
    manobraForte,
    buscarRecorde
};