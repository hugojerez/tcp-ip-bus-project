module.exports= (param)=> {
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
};