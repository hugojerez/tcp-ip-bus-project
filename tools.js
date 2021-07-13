let id = 1;
let canEdit = true;
const usuarios = [

	{ 'id': 1, 'nombre': 'JUAN', 'apellido': 'PEREZ', 'rut': '100', 'clave': '200', 'rol': '5' }
];
const mascotas = [];
const servicios = {
	lmenu() {
		const title = 'Ingrese ROL RUT CLAVE';
		const nextService = 'login';
		const result = `AUTENTICACIÓN
  
        1- PDI
        2- CARABINEROS
        3- SAG
        4- MINISTERIO DE SALUD
        5 -VETERINARIO`;

		return { result, title, nextService };
	},
	login(params) {
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
		canEdit = (rol === '5');
		return { result, title, nextService };
	},
	cream(param) {
		const title = 'PRESIONE TECLA PARA AVANZAR';

		let nextService = 'cream';
		const result = '';
		if (param) {
			id++;
			mascotas.push({ id: id, nombre: param });
			nextService = 'pmenu';
		}
		return { title, nextService, result };
	},

	creap(param) {
		const title = 'PRESIONE TECLA PARA AVANZAR';

		let nextService = 'creap';
		const result = '';
		if (param) {
			id++;
			const [nombre = '', apellido = '', rut = '', clave = '', rol = ''] =
				param.split(' ');
			usuarios.push({ id: id, nombre, apellido, rut, clave, rol });
			nextService = 'pmenu';
		}
		return { title, nextService, result };
	},
	asign(param) {
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

	},
	listm() {
		const title = 'PRESIONE TECLA PARA AVANZAR';
		const nextService = 'pmenu';
		const result = '\nLISTADO DE MASCOTAS\n' + JSON.stringify(mascotas, null, 4) + '\n';

		return { title, nextService, result };
	},

	listp() {
		const title = 'PRESIONE TECLA PARA AVANZAR';
		const nextService = 'pmenu';
		const result = '\nLISTADO DE USUARIOS\n' + JSON.stringify(usuarios, null, 4) + '\n';

		return { title, nextService, result };
	},


	ficha(param) {
		let result = '';
		const title = 'PRESIONE TECLA PARA AVANZAR';
		let nextService = 'ficha';

		if (param) {

			result = '\nFICHA DE MASCOTA\n' + mascotas.find(a => String(a.id) === String(param)).ficha + '\n';
			result += '\nVACUNAS DE MASCOTA\n' + mascotas.find(a => String(a.id) === String(param)).vacunas + '\n';
			nextService = 'pmenu';

		}
		return { title, nextService, result };

	},
	efich(param) {
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

	},
	vacun(param) {
		let result = '';
		const title = 'PRESIONE TECLA PARA AVANZAR';
		let nextService = 'ficha';

		if (param) {
			const paramExplode = param.split(' ');
			const id = paramExplode[0];
			const ficha = paramExplode.slice(1).join(' ');
			mascotas.find((a) => Number(a.id) === Number(id)).vacunas = ficha;

			result = 'INFORMACION INGRESADA';
			nextService = 'pmenu';

		}
		return { title, nextService, result };

	},
	pmenu(param) {
		let title = 'MENU';
		let nextService = 'pmenu';
		let result = '';
		result += '\n' + ('');
		result += '\n' + ('===============================================================');
		result += '\n' + (' dP""b8  dP"Yb  88     8b    d8 888888 Yb    dP 888888 888888 ');
		result += '\n' + ('dP   `" dP   Yb 88     88b  d88 88__    Yb  dP  88__     88   ');
		result += '\n' + ('Yb      Yb   dP 88  .o 88YbdP88 88""     YbdP   88""     88   ');
		result += '\n' + (' YboodP  YbodP  88ood8 88 YY 88 888888    YP    888888   88   ');
		result += '\n' + ('===============================================================');
		result += '\n' + ('||                 VERSION BETA                              ||');
		result += '\n' + ('===============================================================');
		result += '\n' + ('');
		if (canEdit) {
			result += '\n' + ('1- CREAR CLIENTE');
			result += '\n' + ('2- CREAR MASCOTA');
			result += '\n' + ('3- LISTAR CLIENTES');
		}
		result += '\n' + ('4- LISTAR MASCOTAS');
		if (canEdit) {
			result += '\n' + ('5- ASIGNAR CLIENTE-MASCOTA');
		}
		result += '\n' + ('6 - CONSULTAR FICHA GENERAL MASCOTA');
		if (canEdit) {
			result += '\n' + ('7 - INGRESAR INFO FICHA MASCOTA');
			result += '\n' + ('8 - INGRESAR VACUNAS MASCOTA');
		}


		if (param === '1') {
			title = 'Ingrese NOMBRE APELLIDO RUT CLAVE ROL';
			nextService = 'creap';
		}

		if (param === '2') {
			title = 'INGRESE EL NOMBRE DE LA MASCOTA';
			nextService = 'cream';
		}
		if (param === '4') {
			title = 'PRESIONE ENTER PARA AVANZAR';

			nextService = 'listm';
		}
		if (param === '3') {
			title = 'PRESIONE ENTER PARA AVANZAR';

			nextService = 'listp';
		}
		if (param === '5') {
			title = 'INGRESE EL IDUSUARIO Y IDMASCOTA';

			nextService = 'asign';
		}

		if (param === '6') {
			title = 'INGRESE EL IDMASCOTA';

			nextService = 'ficha';
		}

		if (param === '7') {
			title = 'INGRESE EL IDMASCOTA LUEGO DE LA INFO';

			nextService = 'efich';
		}
		if (param === '8') {
			title = 'INGRESE EL IDMASCOTA LUEGO DE LA INFO';

			nextService = 'vacun';
		}

		return { result, title, nextService };
	},

};

exports.servicios = servicios;
