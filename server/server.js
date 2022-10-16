const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors());

let posts = [];

app.get('/', (req, res) => {
  res.json(posts)
});

app.post('/', (req, res) => {
  const newPost = {
    id: req.body.id,
    title: req.body.title,
    content: req.body.content
  }
  posts = posts.concat(newPost);
  res.json(newPost);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});
