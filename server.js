import express from 'express';
import GPT4 from './ai/gpt.js';
import bodyParser from 'body-parser';

const app = express();
const port = 80;

app.use(bodyParser.json());

let GPT = new GPT4('./ai/gpt4all-lora-quantized-win64');

GPT.on('ready', async () => {
	app.listen(port, () => {
		console.log(`Express server listening at http://localhost:${port}`);
	});
});

app.post('/gpt', async (req, res) => {
	let prompt = req.body;
	let startTime = Date.now();
	let output = await GPT.ask(prompt);
	let endTime = Date.now();
	let timeTaken = endTime - startTime;
	
	output = output.replace(`\x1B[1m\x1B[32m\x1B[0m`,"");
	
	res.json({ output, timeTaken });
});

app.get('/gpt/:prompt', async (req, res) => {
    let prompt = req.params.prompt;
    let startTime = Date.now();
    let output = await GPT.ask(prompt);
    let endTime = Date.now();
    let timeTaken = endTime - startTime;
    
    output = output.replace(`\x1B[1m\x1B[32m\x1B[0m`,"");
    
    res.json({ output, timeTaken });
});