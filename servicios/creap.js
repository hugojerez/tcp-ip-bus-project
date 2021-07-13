const idObj = require('./id');
const usuarios = require('./usuarios');


module.exports= (param) =>{
	const title = 'PRESIONE TECLA PARA AVANZAR';

	let nextService = 'creap';
	const result = '';
	if (param) {
		idObj.value++;
		const [nombre = '', apellido = '', rut = '', clave = '', rol = ''] =
            param.split(' ');
		usuarios.push({ id: idObj.value, nombre, apellido, rut, clave, rol });
		nextService = 'pmenu';
	}
	return { title, nextService, result };
};