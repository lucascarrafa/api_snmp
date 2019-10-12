var snmp = require('snmp-native');
var session = new snmp.Session({ host: '200.137.87.181', port: 161, community: 'd3s4f10' });

module.exports = {
    async nome(req, res){
        session.get({ oid: [1, 3, 6, 1, 2, 1, 1, 1, 0] }, function (error, varbinds) {
            if (error) {
                return res.json({mensagem:"Ops, tente novamente"});
            } else {
                return res.json({iod: varbinds[0].oid, value: varbinds[0].value, type: varbinds[0].type});
            }
        });
    }
}
