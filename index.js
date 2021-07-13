const prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
let id = 10;
const mascotas = [];
const users = [

	{id: 1, password: '1234', nombre: 'Señor', apellido: 'PDI', rut: '1002-2', rol: '1'},
	{id: 2, password: '1234', nombre: 'Señor', apellido: 'Veterinario', rut: '1001-1', rol: '5'},

];
let canEdit = false;

fx = [
	() => {
		setTimeout(()=>{
			console.log('');
			console.log('===============================================================');
			console.log(' dP""b8  dP"Yb  88     8b    d8 888888 Yb    dP 888888 888888 ');
			console.log('dP   `" dP   Yb 88     88b  d88 88__    Yb  dP  88__     88   ');
			console.log('Yb      Yb   dP 88  .o 88YbdP88 88""     YbdP   88""     88   ');
			console.log(' YboodP  YbodP  88ood8 88 YY 88 888888    YP    888888   88   ');
			console.log('===============================================================');
			console.log('||                 VERSION BETA                              ||');
			console.log('===============================================================');
			console.log('');
			canEdit && console.log('1- CREAR CLIENTE');
			canEdit && console.log('2- CREAR MASCOTA');
			canEdit && console.log('3- LISTAR CLIENTES');
			console.log('4- LISTAR MASCOTAS');
			canEdit && console.log('5- ASIGNAR CLIENTE-MASCOTA');
			console.log('6 - CONSULTAR FICHA GENERAL MASCOTA');
			canEdit && console.log('7 - INGRESAR INFO FICHA MASCOTA');
			canEdit && console.log('9 - INGRESAR VACUNAS MASCOTA');
		}, 3000);
	},
	async () => {
		id++;

		const nombre = await prompt.get(['nombre']).then((a) => a.nombre);
		const apellido = await prompt.get(['apellido']).then((a) => a.apellido);
		const rut = await prompt.get(['rut']).then((a) => a.rut);
		users.push({id, nombre, apellido, rut});
		console.log(`Bienvenido ${nombre} ${apellido}`);
		_prompt();
	},
	async () => {
		id++;
		const nombre = await prompt.get(['nombre']).then((a) => a.nombre);
		mascotas.push({id, nombre});
		console.log(`Bienvenido ${nombre}`);
		_prompt();
	},

	async () => {
		console.log(users);
		_prompt();
	},


	async () => {
		console.log(mascotas);
		_prompt();
	},

	async () => {
		const mascota = await prompt.get(['IdMascota']).then((a) => a.IdMascota);
		const usuario = await prompt.get(['idUsuario']).then((a) => a.idUsuario);

		users
			.find((a) => Number(a.id) === Number(usuario)).mascota = users.find((a) => Number(a.id) === Number(usuario)).mascota || [];
		users
			.find((a) => Number(a.id) === Number(usuario)).mascota.push({id: mascota});


		mascotas.find((a) => Number(a.id) === Number(mascota)).dueño = usuario;


		_prompt();
	},
	async () => {
		const mascota = await prompt.get(['IdMascota']).then((a) => a.IdMascota);


		console.log(

			mascotas.find((a) => Number(a.id) === Number(mascota)).ficha,

		);
		_prompt();
	},

	async () => {
		const mascota = await prompt.get(['IdMascota']).then((a) => a.IdMascota);
		const ficha = await prompt.get(['ficha']).then((a) => a.ficha);


		mascotas.find((a) => Number(a.id) === Number(mascota)).ficha = ficha;

		_prompt();
	},
	async () => {
		console.log('');

		console.log('AUTENTICACION');
		console.log('');
		console.log('1- PDI');
		console.log('2- CARABINEROS');
		console.log('3- SAG');
		console.log('4- MINISTERIO DE SALUD');
		console.log('5 -VETERINARIO');

		const rol = await prompt.get(['rol']).then((a) => a.rol);

		if (rol >=6 || rol <1) {
			console.log('Reintente nuevamente');
			run();
			return Promise.reject(new Error(1));
		}
		const rut = await prompt.get(['rut']).then((a) => a.rut);

		const password = await prompt.get(['password']).then((a) => a.password);

		const tryLogin =
    users.find((user)=>
    	( user.rol===rol&&user.rut===rut&&user.password===password ) );

		console.log({tryLogin});
		if (
			!tryLogin
		) {
			console.log('El usuario no existe');
			run();
			return Promise.reject(new Error(1));
		}
		canEdit = (Number(rol) === Number('5'));
	},

	async () => {
		// 9
		const mascota = await prompt.get(['IdMascota']).then((a) => a.IdMascota);
		const vacunas = await prompt.get(['vacunas']).then((a) => a.vacunas);


		mascotas.find((a) => Number(a.id) === Number(mascota)).vacunas = vacunas;

		_prompt();
	},

];

const run = ()=>{
	fx[8]().then(()=>{
		_prompt = async () => {
			await fx[0]();

			prompt.get(['instruccion'], function(err, result) {
				fx[result.instruccion]();
			});
		};
		_prompt();
	}).catch(()=>{});
};

run();
