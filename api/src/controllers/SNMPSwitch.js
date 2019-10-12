var snmp = require('snmp-native');
var session = new snmp.Session({ host: '200.137.87.181', port: 161, community: 'd3s4f10' });
mostraStatus = function(valor){
	if(valor=="1"){
		return "UP";
	}else{
		return "DOWN";
	}
}

module.exports = {
    async nome(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 1, 1, 0] }, function (error, varbinds) {
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                return res.json({iod: varbinds[0].oid, equipamento: varbinds[0].value});
            }
        });
    },
    async porta01(req, res){	
        session.get({ oid: [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1001] }, function (error, varbinds) {
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                return res.json({iod:varbinds[0].oid, status: mostraStatus(varbinds[0].value)});
            }
        });
    },
    async porta02(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 2, 2, 1, 8, 1002] }, function (error, varbinds) {
            if (error) {
                return res.json({mensagem:"Ops, algo de errado"});
            } else {
                return res.json({iod:varbinds[0].oid, status: mostraStatus(varbinds[0].value)});
            }
        });
    }
}

