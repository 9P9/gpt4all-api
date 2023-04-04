import axios from 'axios';

const prompt = 'How are you doing today?';

async function main(){
	let res = await axios.post('http://localhost/gpt', { prompt });
	console.log(res.data);
}
main();
