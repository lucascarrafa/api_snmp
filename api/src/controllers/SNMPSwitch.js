const Switch = require('../model/Switch')
var snmp = require('snmp-native'); //biblioteca SNMP mais recente da comunidade
var session = new snmp.Session({ host: '200.137.87.181', port: 161, community: 'd3s4f10' });

mostraStatus = function(valor){ //funcao responsavel por converter o value(1)/(2) no estado desejado
        if(valor==1){
                return "UP";
        }else{
                return "DOWN";
        }
}

verificaValor = function(valor){ //funcao que verifica se o value eh um inteiro para classificar o nome ou porta
        if(Number.isInteger(valor)){
                return mostraStatus(valor);
        }else{
                return valor;
        }
}

module.exports = {

    async raiz(req, res){
        Switch.find({}, function(err, docs) {
            if (!err){
                return res.json(docs);
            } else {throw err;}
        });
    },

    async nome(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 1, 1, 0] }, async function (error, varbinds) {
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                //salva o mongo e retorna uma resposta contendo as variaveis salvas
                resposta_banco = await Switch.create({oid:varbinds[0].oid.toString(),value:verificaValor(varbinds[0].value),type:varbinds[0].type});
                name_switch = {nome: resposta_banco['value']} //extrai apenas o nome do switch
                return res.json(name_switch);
            }
        });
    },

    async porta01(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001] },async function (error, varbinds) {
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                //salva o mongo e retorna uma resposta contendo as variaveis salvas
                resposta_banco = await Switch.create({oid:varbinds[0].oid.toString(),value:verificaValor(varbinds[0].value),type:varbinds[0].type});
                status_port = {estado: resposta_banco['value']} //extrai apenas o estado do switch
                return res.json(status_port);
            }
        });
    },

    async porta02(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002] }, async function (error, varbinds) {
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                //salva o mongo e retorna uma resposta contendo as variaveis salvas
                resposta_banco = await Switch.create({oid:varbinds[0].oid.toString(),value:verificaValor(varbinds[0].value),type:varbinds[0].type});
                status_port = {estado: resposta_banco['value']} //extrai apenas o estado do switch
                return res.json(status_port);
            }
        });
    },

    async inserir(req,res){
        const {oid, value, type} = req.body //pega os dados passados no corpo da requisicao
        const resposta_banco = await Switch.create({oid:oid,value:value,type:type}); //armazena no banco de dados
        return res.json(resposta_banco);
    },

    async atualizar(req,res){
        const {oid, value, type} = req.body //pega os dados passados no corpo da requisicao
        const resposta_banco = await Switch.updateOne({oid:oid},{value:value,type:type}); //atualiza no banco de dados
        return res.json(resposta_banco);
    },

    async deletar(req,res){
        const {oid} = req.body //pega os dados passados no corpo da requisicao
        const resposta_banco = await Switch.deleteOne({oid:oid}, function (err) {}); //exclui no banco de dados
        return res.json(resposta_banco);
    }
}
