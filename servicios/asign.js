
const usuarios = require('./usuarios');
const mascotas = require('./mascotas');

module.exports =  (param)=> {
	const title = 'PRESIONE TECLA PARA AVANZAR';

	let nextService = 'asign';
	const result = '';
	const [usuario = '', mascota = ''] = param.split(' ');
	if (usuario && mascota) {
		usuarios
			.find((a) => Number(a.id) === Number(usuario)).mascota = usuarios.find((a) => Number(a.id) === Number(usuario)).mascota || [];
		usuarios
			.find((a) => Number(a.id) === Number(usuario)).mascota.push({ id: mascota });


		mascotas.find((a) => Number(a.id) === Number(mascota)).dueño = usuario;
		nextService = 'pmenu';

	}
	return { title, nextService, result };

};