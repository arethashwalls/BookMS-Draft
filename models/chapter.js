const mongoose = require('mongoose');
const pageSchema = require('./page').schema;

const chapterSchema = new mongoose.Schema({
    ch_title: String,
    ch_num: Number,
    tags: [String],
    pages: [pageSchema]
});

module.exports = {
    schema: chapterSchema,
    model: mongoose.model('Chapter', chapterSchema)
};