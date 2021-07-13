const net = require('net');
const readline = require('readline');


const uiReadLine = (title)=>{
	const rl = readline.createInterface({
		// eslint-disable-next-line no-undef
		input: process.stdin,
		// eslint-disable-next-line no-undef
		output: process.stdout,
	});
	return new Promise((resolve)=>{
		rl.question((title||'Ingrese valores ')+ ' : ', (answer) => {
			rl.close();
			resolve(answer);
		});
	});
};

const client = net.createConnection({port: 5000}, () => {
	// 'connect' listener.
	console.log('connected to server!');
	client.write('01000lmenu');
});
client.on('data', async (data) => {
	const object = JSON.parse(data.toString());
	console.log(object.result);

	client.write( '01000'+ object.nextService + await uiReadLine(object.title));
	console.log('termino enviar');
	// client.end();
});
client.on('end', () => {
	console.log('disconnected from server');
});
