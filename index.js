var express = require('express');
var app = express();

app.get("/", (req, res) => {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('<script>var prompt = prompt("^^", "")</script>');
res.write(`<script>
	document.write('<h1>'+prompt+'</h1>');
	</script>`);
res.end();
});

app.listen(process.env.PORT, () => {
	console.log('Hello World!!');
	});
