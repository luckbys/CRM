const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index (3).html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
