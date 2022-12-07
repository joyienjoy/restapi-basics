const express = require ('express');
const Joi = require ('joi');
const app = express();
app.use(express.json());

const books = [
    	{title: 'Saltwater Crocodile', id: 1},
	{title: 'Maggar Crocodile', id: 2},
];

app.get('/', (req, res) => {
    res.send('Welcome To Crocodile Database');    
});     

app.get('/crocdoc', (req, res) => {
    res.send(books);    
}); 

//Search in database with ID
app.get('/crocdoc/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if (!book) return  res.status(404).send('The Croc details with the given ID was not found.');  //404
    res.send(book);

});

app.post('/crocdoc', (req, res) => {
	const { error } = validateBook(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	const book = {
		id: books.length + 1,
		title: req.body.title
		};
	books.push(book);
	res.send(book);
});

app.put('/crocdoc/:id', (req, res) => {
	const book = books.find(c=> c.id === parseInt(req.params.id));
	if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

	const { error } = validateBook(req.body);
	if (error){
		res.status(400).send(error.details[0].message);
		return;
	}

	book.title = req.body.title;
	res.send(book);
});

//DELETE Request Handler
app.delete('/crocdoc/:id', (req, res) => {

const book = books.find( c=> c.id === parseInt(req.params.id));
if(!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

const index = books.indexOf(book);
books.splice(index,1);

res.send(book);
});

function validateBook(book) {
const schema = Joi.object({
	title: Joi.string().min(3).required()
	});
	return schema.validate(book);
}

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
