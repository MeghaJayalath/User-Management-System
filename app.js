const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

// Hardcoded usernames with IDs
let users = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    { id: 3, username: 'user3' },
    { id: 4, username: 'user4' },
    { id: 5, username: 'user5' },
];

// Routes
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.json(newUser);
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const index = users.findIndex((u) => u.id === userId);

    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        res.json(users[index]);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter((u) => u.id !== userId);
    res.json({ message: 'User deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
