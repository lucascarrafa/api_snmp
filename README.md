## API REST que realiza consultas SNMP em um switch

# Versão 1.2
Na versão o container lucascarrafa/server_snmp retorna apenas variáveis como *estado e nome*

A consulta "http://<ip-do-servidor>:5000/” retorna todos dados do dispositivo armazenados no banco de dados
**Retorno**
´´´
[
  {
    "_id": "5da72687fd50242b668c537a",
    "oid": "1,3,6,1,2,1,1,1,0",
    "value": "ExtremeXOS (X450e-24p) version 15.3.5.2 v1535b2-patch1-19 by release-manager on Tue Aug 28 11:41:05 EDT 2018",
    "type": "4",
    "createdAt": "2019-10-16T14:17:43.668Z",
    "updatedAt": "2019-10-16T14:17:43.668Z",
    "__v": 0
  },
  {
    "_id": "5da7268afd502478c08c537b",
    "oid": "1,3,6,1,2,1,2,2,1,8,1001",
    "value": "UP",
    "type": "2",
    "createdAt": "2019-10-16T14:17:46.721Z",
    "updatedAt": "2019-10-16T14:17:46.721Z",
    "__v": 0
  },
  {
    "_id": "5da7268dfd50242ea38c537c",
    "oid": "1,3,6,1,2,1,2,2,1,8,1002",
    "value": "DOWN",
    "type": "2",
    "createdAt": "2019-10-16T14:17:49.581Z",
    "updatedAt": "2019-10-16T14:17:49.581Z",
    "__v": 0
  }
]
´´´
A consulta “http://<ip-do-servidor>:5000/porta01 retorna e armazena o estado da porta 01 do switch
**Retorno**
´´´
{
  "estado": "UP"
}
´´´
A consulta “http://<ip-do-servidor>:5000/porta02 retorna e armazena o estado da porta 02 do switch
**Retorno**
´´´
{
  "estado": "DOWN"
}
´´´
A consulta “http://<ip-do-servidor>:5000/nome retorna e armazena o nome do switch
**Retorno**
´´´
{
  "nome": "ExtremeXOS (X450e-24p) version 15.3.5.2 v1535b2-patch1-19 by release-manager on Tue Aug 28 11:41:05 EDT 2018"
}
´´´
A consulta “http://<ip-do-servidor>:5000/inserir armazena um novo oid (porta,nome,...) no banco de dados
**Exemplo de inserção de dados usando JSON**
´´´
  {
    "oid": "1,3,6,1,2,1,2,2,1,8,1019", //novo iod
    "value": "UP", //novo value
    "type": 2 //novo type
  }
´´´
A consulta “http://<ip-do-servidor>:5000/atualizar atualiza um registro no banco de dados
**Exemplo de atualização de dados usando JSON**
´´´
   {
    "oid": "1,3,6,1,2,1,2,2,1,8,1019", //oid usado como referência
    "value": "DOWN", //valor a ser atualizado
    "type": 5 //valor a ser atualizado
  }
´´´
A consulta “http://<ip-do-servidor>:5000/deletar excluir um oid no banco de dados
**Exemplo de exclusão de dados usando JSON**
  {
    "oid": "1,3,6,1,2,1,2,2,1,8,1019" //oid usado como referência
  }

# Versão 1.1
Na versão o container lucascarrafa/server_snmp retorna todas as variáveis registradas no banco de dados mongodb

A consulta "http://<ip-do-servidor>:5000/” retorna todos dados do dispositivo armazenados no banco de dados
**Retorno**
´´´
[
  {
    "_id": "5da72687fd50242b668c537a",
    "oid": "1,3,6,1,2,1,1,1,0",
    "value": "ExtremeXOS (X450e-24p) version 15.3.5.2 v1535b2-patch1-19 by release-manager on Tue Aug 28 11:41:05 EDT 2018",
    "type": "4",
    "createdAt": "2019-10-16T14:17:43.668Z",
    "updatedAt": "2019-10-16T14:17:43.668Z",
    "__v": 0
  },
  {
    "_id": "5da7268afd502478c08c537b",
    "oid": "1,3,6,1,2,1,2,2,1,8,1001",
    "value": "UP",
    "type": "2",
    "createdAt": "2019-10-16T14:17:46.721Z",
    "updatedAt": "2019-10-16T14:17:46.721Z",
    "__v": 0
  },
  {
    "_id": "5da7268dfd50242ea38c537c",
    "oid": "1,3,6,1,2,1,2,2,1,8,1002",
    "value": "DOWN",
    "type": "2",
    "createdAt": "2019-10-16T14:17:49.581Z",
    "updatedAt": "2019-10-16T14:17:49.581Z",
    "__v": 0
  }
]
´´´
A consulta “http://<ip-do-servidor>:5000/porta01 retorna e armazena o estado da porta 01 do switch
**Retorno**
´´´
  {
    "_id": "5da7268afd502478c08c537b",
    "oid": "1,3,6,1,2,1,2,2,1,8,1001",
    "value": "UP",
    "type": "2",
    "createdAt": "2019-10-16T14:17:46.721Z",
    "updatedAt": "2019-10-16T14:17:46.721Z",
    "__v": 0
  }
´´´
A consulta “http://<ip-do-servidor>:5000/porta02 retorna e armazena o estado da porta 02 do switch
**Retorno**
´´´
  {
    "_id": "5da7268dfd50242ea38c537c",
    "oid": "1,3,6,1,2,1,2,2,1,8,1002",
    "value": "DOWN",
    "type": "2",
    "createdAt": "2019-10-16T14:17:49.581Z",
    "updatedAt": "2019-10-16T14:17:49.581Z",
    "__v": 0
  }
´´´
A consulta “http://<ip-do-servidor>:5000/nome retorna e armazena o nome do switch
**Retorno**
´´´
  {
    "_id": "5da72687fd50242b668c537a",
    "oid": "1,3,6,1,2,1,1,1,0",
    "value": "ExtremeXOS (X450e-24p) version 15.3.5.2 v1535b2-patch1-19 by release-manager on Tue Aug 28 11:41:05 EDT 2018",
    "type": "4",
    "createdAt": "2019-10-16T14:17:43.668Z",
    "updatedAt": "2019-10-16T14:17:43.668Z",
    "__v": 0
  }
´´´
A consulta “http://<ip-do-servidor>:5000/inserir armazena um novo oid (porta,nome,...) no banco de dados
**Exemplo de inserção de dados usando JSON**
´´´
  {
    "oid": "1,3,6,1,2,1,2,2,1,8,1019", //novo iod
    "value": "UP", //novo value
    "type": 2 //novo type
  }
´´´
A consulta “http://<ip-do-servidor>:5000/atualizar atualiza um registro no banco de dados
**Exemplo de atualização de dados usando JSON**
´´´
   {
    "oid": "1,3,6,1,2,1,2,2,1,8,1019", //oid usado como referência
    "value": "DOWN", //valor a ser atualizado
    "type": 5 //valor a ser atualizado
  }
´´´
A consulta “http://<ip-do-servidor>:5000/deletar excluir um oid no banco de dados
**Exemplo de exclusão de dados usando JSON**
´´´
  {
    "oid": "1,3,6,1,2,1,2,2,1,8,1019" //oid usado como referência
  }
´´´
