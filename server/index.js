const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Task = require('./mongooseSchema.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());

const dbName = 'TasksDatabase';
const mongooseURL = `mongodb+srv://admin:Entropia1@cluster0.193v2.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(mongooseURL);
const db = mongoose.connection;
db.on('error', (err) => console.log('Not connected, error:', err));
db.once('open', (err) => console.log('Connected to database'));

app.get('/api', async (req, res) => {
	const tasks = await Task.find();
	res.json({ tasks });
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.post('/addtask', async (req, res) => {
	const { id, text, date, isEdit } = req.body;
	const task = new Task({
		id,
		text,
		date,
		isEdit,
	});
	await task.save();
	const tasks = await Task.find();
	res.json({ tasks });
});

app.post('/updatetask', async (req, res) => {
	const { id, text, date, isEdit } = req.body;
	await Task.findOneAndUpdate(
		{ id },
		{
			id,
			text,
			date,
			isEdit,
		},
	);
	const tasks = await Task.find();
	res.json({ tasks });
});

app.delete('/deletetask/:id', async (req, res) => {
	const id = Number(req.params.id);
	await Task.deleteOne({ id });
	const tasks = await Task.find();
	res.json({ tasks });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
