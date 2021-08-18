// create books router 

const express = require("express");
const bodyParser = require("body-parser"); 


const bookRouter = express.Router();

bookRouter.use(bodyParser.json();


bookRouter.route("/")
.all((req, res, next) => {
	res.statusCode = 200;
	console.log("All is well"); // I get bored
	res.setHeader('Content-Type', 'application/json');
	next();
})
.get((req, res, next) => {
	console.log("you are greedy...")
	res.end("sending all the books to you ++======");
})
.post((req, res, next) => {
	console.log("how kind of you")
	res.end("add " + req.body.name + " with ISBN " + req.body);
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end("no space for more books");
})
.delete((req, res, next) => {
	console.log("you want to deplete my lib?")
	res.end("fine, clearing all books in inventory...");
})


// at bookId endpoint
bookRouter.route("/:booksId");
.all((req, res, next) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	next();
})
.get((req, res, next) => {
	console.log("you are greedy...")
	res.end("sending all the books to you ++======");
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end("no space for you here...look elsewhere: " + req.params.bookId);
})
.put((req, res, next) => {
	console.log("useful info")
	res.write("Update the book: " + req.params.bookId + "\n");
	res.end("Updating book: " + req.body.name + " with details " + req.body.description);
})
.delete((req, res, next) => {
	console.log("we are going to miss you")
	res.end("coming back?...OK deleting you: " + req.params.dishId);
})

module.exports = bookRouter;
