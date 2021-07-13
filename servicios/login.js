
const usuarios = require('./usuarios');
const idObj = require('./id');

module.exports = 
(params) =>{
	const [rol = '', rut = '', clave = ''] = params.split(' ');
	let result;
	let nextService = 'pmenu';
	let title;

	const resultados = usuarios.find((user) => (user.rol === rol && user.rut === rut && user.clave === clave));
	if (resultados) {
		result = `LOGEADO COMO ${rut} con rol ${rol}`;
		title = 'PRESIONE TECLA PARA AVANZAR';


	}
	else {
		result = 'NO EXISTE USUARIO ';
		nextService = 'login';
		title = 'INGRESE ROL RUT Y CLAVE';


	}
	idObj.canEdit = (rol === '5');
	return { result, title, nextService };
};3;