require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || '3000';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'njk');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})