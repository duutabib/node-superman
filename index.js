// create handlers for route endpoint

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const morgan = require("morgan");


const bookRouter = require("./route/bookRouter");

const hostname = "localhost";

const app = express();


app.use(morgan("dev")); // host endpoint
app.use(express.static(__dirname + "public");
app.use(bodyParser.json());


app.use("/book", bookRouter);

app.use((req, res, next) => {
	console.log("Welcome");
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/html");
	
	res.end("some basic html here, but for time");
});


const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
