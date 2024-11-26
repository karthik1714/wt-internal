const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! This is an Express server.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}/`);
});
