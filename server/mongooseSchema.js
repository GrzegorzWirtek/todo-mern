const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
	text: { type: String },
	date: { type: String },
	isEdit: { type: Boolean, default: false },
});

module.exports = mongoose.model('task', tasksSchema);
