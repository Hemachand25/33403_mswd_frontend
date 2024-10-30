const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'public')));

const students = [
  { name: 'Hemachand', id: '32536', branch: 'CSE', year: 2 },
  { name: 'Likitha', id: '30001', branch: 'CSE', year: 2 },
  { name: 'Priya', id: '30002', branch: 'CSE', year: 2 },
  { name: 'Monika', id: '30003', branch: 'CSE', year: 2 },
  { name: 'Prabhas', id: '30004', branch: 'CSE', year: 2 } // Changed ID to '30004'
];

const faculty = [
  { name: 'Dr. Lasya', id: '1224', dept: 'CSE-H', designation: 'Professor' },
  { name: 'Dr. Kushmitha', id: '3340', dept: 'IOT', designation: 'Professor' },
  { name: 'Dr. Lakshmi', id: '3318', dept: 'ECE', designation: 'Professor' }
];

const courses = [
  { coursecode: '23SCS06EF', coursetitle: 'MSWD', ltps: '0-0-7-6', credits: '4' }
];

const feedback = [
  { id: 1, student: 'HC', message: 'Good' },
  { id: 2, student: 'Monika', message: 'Average' }
];

// Default route
app.get('/', (req, res) => {
  res.send('WELCOME!');
});

// Route to get student details
app.get('/student', (req, res) => {
  res.json(students);
});

// Route to get faculty details
app.get('/faculty', (req, res) => {
  res.json(faculty);
});

// Route to get course details
app.get('/courses-ltps', (req, res) => {
  res.json(courses);
});

// Route to get feedback
app.get('/feedback', (req, res) => {
  res.json(feedback);
});

// Route to get the PDF file
app.get('/MSD', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'MSD.pdf');
  res.sendFile(filePath);
});

// Route to get the image file
app.get('/MS', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'MS.jpg');
  res.sendFile(filePath);
});

app.get('/dhoni', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'dhoni.mp4');
  res.sendFile(filePath);
});

// Catch-all route for undefined routes
app.get('*', (req, res) => {
  res.send('Route not found.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
