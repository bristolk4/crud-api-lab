const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Cat = require('./models/cat.js')
const cors = require('cors');
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
app.use(cors());
app.use(express.json());

// POST-create new cat
app.post('/cats', async (req, res) => {
    const createdCat = await Cat.create(req.body)
    res.json(createdCat)
})

// GET-find all cats
app.get('/cats', async (req, res) => {
	const foundCats = await Cat.find()
    res.json(foundCats)
})

// DELETE-delete a cat
app.delete('/cats/:catId', async (req, res) => {
	const deletedCat = await Cat.findByIdAndDelete(req.params.catId)
    res.json(deletedCat)
})

// UPDATE-PUT-update a cat
app.put('/pets/:petId', async (req, res) => {
    const updatedCat = await Cat.findByIdAndUpdate(req.params.catId, req.body, {new: true})
    res.json(updatedCat)
})

app.listen(3000, () => {
  console.log('The express app is ready!');
});