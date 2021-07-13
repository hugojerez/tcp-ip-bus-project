const usuarios = require('./usuarios');

module.exports = ()=> {
	const title = 'PRESIONE TECLA PARA AVANZAR';
	const nextService = 'pmenu';
	const result = '\nLISTADO DE USUARIOS\n' + JSON.stringify(usuarios, null, 4) + '\n';

	return { title, nextService, result };
};