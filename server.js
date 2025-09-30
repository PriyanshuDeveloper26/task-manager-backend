const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
    const MONGO_URI = "mongodb+srv://sathavarapriyanshu9_db_user:sathavarapriyanshu9_db_user@cluster0.ugxmhdm.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api', userRoutes);
app.use('/api', taskRoutes);

// Start Server


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log('Please make sure you have MongoDB running on your local machine for the application to work correctly.');
