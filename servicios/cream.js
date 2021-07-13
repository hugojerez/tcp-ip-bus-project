const mascotas = require('./mascotas');
const idObj = require('./id');

module.exports =  (param) =>{
	const title = 'PRESIONE TECLA PARA AVANZAR';

	let nextService = 'cream';
	const result = '';
	if (param) {
		idObj.value++;
		mascotas.push({ id: idObj.value, nombre: param });
		nextService = 'pmenu';
	}
	return { title, nextService, result };
};