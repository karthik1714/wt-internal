const express = require('express');
const session = require('express-session');

const app = express();

app.use(
    session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }, // Session expires after 1 minute
    })
);

app.get('/', (req, res) => {
    if (!req.session.views) {
        req.session.views = 1;
    } else {
        req.session.views++;
    }
    res.send(`You have visited this page ${req.session.views} times.`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server with sessions running at http://localhost:${PORT}/`);
});
