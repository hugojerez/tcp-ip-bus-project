

module.exports =()=> {
	const title = 'Ingrese ROL RUT CLAVE';
	const nextService = 'login';
	const result = `AUTENTICACIÓN

    1- PDI
    2- CARABINEROS
    3- SAG
    4- MINISTERIO DE SALUD
    5 -VETERINARIO`;

	return { result, title, nextService };
};