const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipeRoutes'); // Ensure the path matches your file structure

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://AimenAbdu:n0eIoVsuES1H3TkO@cluster0.vuyqqyo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Use recipeRoutes for any '/api/recipes' routes
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


