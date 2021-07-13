

const efich = require('./servicios/efich');
const pmenu = require('./servicios/pmenu');
const listm = require('./servicios/listm');
const login = require('./servicios/login');
const usuarios = require('./servicios/usuarios');
const cream = require('./servicios/cream');
const ficha = require('./servicios/ficha');
const listp = require('./servicios/listp');
const mascotas = require('./servicios/mascotas');
const vacun = require('./servicios/vacun');
const creap = require('./servicios/creap');
const id = require('./servicios/id');
const lmenu = require('./servicios/lmenu');

const servicios = {
	efich,
	listm,
	pmenu,
	login,
	usuarios,
	cream,
	ficha,
	listp,
	mascotas,
	vacun,
	creap,
	id,
	lmenu


};

exports.servicios = servicios;
