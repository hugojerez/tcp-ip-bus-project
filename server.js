const net = require('net');
const {StringDecoder} = require('string_decoder');

const {servicios} = require( './tools');


const server = net.createServer((socket) => {
	socket.on('data', (a) => {
		const decoder = new StringDecoder('utf8');
		// eslint-disable-next-line no-undef
		const value = Buffer.from(a );
		const largoDeLaTransaccion = Number(decoder.write(value ).slice(0, 5));
		const servicioInvocado = decoder.write(value ).slice(5, 10);
		const contenido = decoder.write(value ).slice(10, largoDeLaTransaccion);

		console.log({largoDeLaTransaccion, contenido, servicioInvocado});

		socket.write(JSON.stringify( servicios[servicioInvocado]( contenido)), 'utf8');
	
	});


	// socket.end('goodbye\n');
}).on('error', (err) => {
	// Handle errors here.
	throw err;
});

// Grab an arbitrary unused port.
server.listen(5001, () => {
	console.log('opened server on', server.address());
});

server.on('data', ()=>{
	// console.log(4);
});
