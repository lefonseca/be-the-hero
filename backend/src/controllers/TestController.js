const connection = require('../database/connection');

module.exports = {
    index (request, response) {
        /** obtemos os parametros enviado pela Query Param utilizando .query */
        const params = request.query;
        
        console.log(params);
        
        /**  return Response.send('Hello World'); */
        return response.json({
            evento: 'Consulta passando parametro com Query',
            usuario: params.name,
            idade: params.idade
        });
    },

    indexDetail (request, response) {
        /** obtemos os parametros enviado pela Route Param utilizando .params */

        const params = request.params;
        
        console.log(params);
        
        /**  return Response.send('Hello World'); */
        return response.json({
            evento: 'Consulta passando parâmetro',
            id: params.id,
            usuario: 'Cristina Fonseca',
            msg: 'Chupa Cleitinho...'
        });
    },

    create (request, response) {
        /** obtemos os parametros enviado pela Body utilizando .body */
        const body = request.body;
        
        console.log(body);
        
        /**  return Response.send('Hello World'); */
        return response.json({
            evento: 'Registro inserido com suscesso!',
            name: body.name, 
            idade: body.idade
        });
    }

}
