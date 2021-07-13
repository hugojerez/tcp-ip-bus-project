
const mascotas = require('./mascotas');

module.exports = (param)=> {
	let result = '';
	const title = 'PRESIONE TECLA PARA AVANZAR';
	let nextService = 'ficha';

	if (param) {

		result = '\nFICHA DE MASCOTA\n' + mascotas.find(a => String(a.id) === String(param)).ficha + '\n';
		result += '\nVACUNAS DE MASCOTA\n' + mascotas.find(a => String(a.id) === String(param)).vacunas + '\n';
		nextService = 'pmenu';

	}
	return { title, nextService, result };

};