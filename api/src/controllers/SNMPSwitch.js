const Switch = require('../model/Switch')
var snmp = require('snmp-native');
var session = new snmp.Session({ host: '200.137.87.181', port: 161, community: 'd3s4f10' });

mostraStatus = function(valor){
        if(valor=="1"){
                return "UP";
        }else{
                return "DOWN";
        }
}

verificaValor = function(valor){
	if(Number.isInteger(valor)){
		return mostraStatus(valor);
	}else{
		return valor;
	}
}

guardaDados = function(valor){
	const dadosSwitch =[];
	valor.forEach(async (vb)=>{
		dadosSwitch.push({"iod":vb.oid.toString(),"value":verificaValor(vb.value),"type":vb.type})
		await Switch.create({iod:vb.oid.toString(),value:verificaValor(vb.value),type:vb.type}); 
	});
	return dadosSwitch;
}


module.exports = {
    async raiz(req, res){
        var oids = [ [1, 3, 6, 1, 2, 1, 1, 1, 0], [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001],[1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002]];
	session.getAll({ oids: oids }, function (error, varbinds) {
		return res.json(guardaDados(varbinds));	
	});
    },
    async nome(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 1, 1, 0] }, function (error, varbinds) {
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                return res.json({iod: varbinds[0].oid.toString(), equipamento: varbinds[0].value});        
            }
        });
    },
    async porta01(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001] }, function (error, varbinds) { 
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                return res.json({iod:varbinds[0].oid.toString(), status: mostraStatus(varbinds[0].value)});
            }
        });
    },    async porta02(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002] }, function (error, varbinds) {             
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                return res.json({iod:varbinds[0].oid.toString(), status: mostraStatus(varbinds[0].value)});
            }
        });
    }
}
