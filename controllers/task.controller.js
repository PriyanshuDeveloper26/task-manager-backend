const Task = require('../models/task.model');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('user');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTask = async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        user: req.body.user,
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
