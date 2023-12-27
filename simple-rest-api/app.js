const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Placeholder for tasks (in-memory storage)
let tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
];

// GET /tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET /tasks/:id
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
        res.status(404).json({ error: 'Task not found' });
    } else {
        res.json(task);
    }
});

// POST /tasks
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        res.status(400).json({ error: 'Title and description are required' });
    } else {
        const newTask = { id: tasks.length + 1, title, description };
        tasks.push(newTask);
        res.status(201).json(newTask);
    }
});

// PUT /tasks/:id
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
        res.status(404).json({ error: 'Task not found' });
    } else {
        const { title, description } = req.body;
        tasks[taskIndex] = { ...tasks[taskIndex], title, description };
        res.json(tasks[taskIndex]);
    }
});

// DELETE /tasks/:id
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter((t) => t.id !== taskId);
    res.json({ message: 'Task deleted successfully' });
});

// Handle undefined routes
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
