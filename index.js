const express = require('express');
const app = express();
app.use(express.json());

let notes = [
    { id: 1, title: 'Learn Git', author: 'DevOps' },
    { id: 2, title: 'Practice EC2', author: 'DevOps' }
  ];

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json(note);
});

app.listen(3000, () => console.log('Server running on port 3000'));
