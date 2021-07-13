
const mascotas = require('./mascotas');



module.exports  = (param)=> {
	let result = '';
	const title = 'PRESIONE TECLA PARA AVANZAR';
	let nextService = 'ficha';

	if (param) {
		const paramExplode = param.split(' ');
		const id = paramExplode[0];
		const ficha = paramExplode.slice(1).join(' ');
		mascotas.find((a) => String(a.id) === String(id)).ficha = ficha;

		result = 'INFORMACION INGRESADA';
		nextService = 'pmenu';

	}
	return { title, nextService, result };

};