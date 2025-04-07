const express = require('express');
const app = express();
app.use(express.json());

let notes = [
  { id: 1, title: 'Learn Git' },
  { id: 2, title: 'Practice EC2' }
];

app.get('/notes', (req, res) => {
    res.json({ message: "Get all notes here!" }); // conflict line
  });

app.post('/notes', (req, res) => {
  const note = req.body;
  notes.push(note);
  res.status(201).json(note);
});

app.listen(3000, () => console.log('Server running on port 3000'));
