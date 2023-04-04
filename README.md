# Prerequisites

    Node.js installed on your machine

# Installation

    Clone or download the code to your local machine.

    Open a terminal or command prompt and navigate to the project directory.

    Install the required dependencies by running the following command:

    npm install
    
### Different Platform Use:
	If you're using a different platform ensure you use the correct binary for your OS from:
		- [GPT4ALL](https://github.com/nomic-ai/gpt4all)
	Then Adjust the code in server.js to fit: 
		```
		let GPT = new GPT4('./ai/gpt4all-lora-quantized-win64'); //Windows
		let GPT = new GPT4('./ai/gpt4all-lora-quantized-OSX-m1'); //M1 Mac/OSX
		let GPT = new GPT4('./ai/gpt4all-lora-quantized-OSX-intel'); //Intel Mac/OSX
		let GPT = new GPT4('./ai/gpt4all-lora-quantized-linux-x86'); //Linux
		```
### How to get the GPT4ALL model! 

Download the `gpt4all-lora-quantized.bin` file from [Direct Link](https://the-eye.eu/public/AI/models/nomic-ai/gpt4all/gpt4all-lora-quantized.bin) or [[Torrent-Magnet]](https://tinyurl.com/gpt4all-lora-quantized).

### Where to Put the Model:

Ensure the model is in the main directory! Along with exe

![image](https://user-images.githubusercontent.com/59532064/229744381-b7fed330-d51b-4df0-8b74-c413f9a6d667.png)


# Usage

    Start the server by running the following command:

` npm start `

This will start the Express server and listen for incoming requests on port 80.

To use the /gpt endpoint, make a POST request to http://localhost/gpt with a JSON object in the request body containing a prompt property. For example:

```
const axios = require('axios');

const prompt = 'How are you doing today?';

async function main(){
	let res = await axios.post('http://localhost/gpt', { prompt });
	console.log(res.data);
}
main();
```

This will return a JSON object containing the generated text and the time taken to generate it.

To use the /gpt/:prompt endpoint, make a GET request to http://localhost/gpt/:prompt, where :prompt is the prompt you want to use. For example:

```
    GET http://localhost/gpt/Hello,%20how%20are%20you?

    This will return a JSON object containing the generated text and the time taken to generate it.

    To stop the server, press Ctrl+C in the terminal or command prompt where it is running.
```


Related Repos:
	- [GPT4ALL](https://github.com/nomic-ai/gpt4all)
	- [Unmodified gpt4all Wrapper](https://github.com/realrasengan/gpt4all-wrapper-js)

