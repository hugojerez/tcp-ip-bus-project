const mascotas = require('./mascotas');


module.exports = ()=> {
	const title = 'PRESIONE TECLA PARA AVANZAR';
	const nextService = 'pmenu';
	const result = '\nLISTADO DE MASCOTAS\n' + JSON.stringify(mascotas, null, 4) + '\n';

	return { title, nextService, result };
};
