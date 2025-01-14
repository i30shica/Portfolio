// backend/app.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/assets', express.static('assets'));


// Projects data (You can edit projects.json instead)
const projects = [
  {
    "id": 1,
    "title": "Home Security System",
    "image": "assets/project1.jpg",
    "github": "https://github.com/ishica/home-security"
  },
  {
    "id": 2,
    "title": "Brain Tumor Detection",
    "image": "assets/project2.jpg",
    "github": "https://github.com/ishica/brain-tumor-detection"
  },
  {
    "id": 3,
    "title": "Smart Home Automation",
    "image": "assets/project3.jpg",
    "github": "https://github.com/ishica/smart-home-automation"
  }
];

// Route to get all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Root route
app.get('/', (req, res) => {
  res.send('Backend is running. Go to /api/projects to fetch project data.');
});

// Start server
app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
