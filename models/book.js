const mongoose = require('mongoose');
const authorSchema = require('./author').schema;
const chapterSchema = require('./chapter').schema;
const pageSchema = require('./page').schema;

const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    authors: [authorSchema],
    tags: [String],
    chapters: [chapterSchema],
    stdalone_pages: [pageSchema],
});

module.exports = {
    schema: bookSchema,
    model: mongoose.model('Book', bookSchema)
};
