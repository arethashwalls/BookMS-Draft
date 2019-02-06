const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    ch_title: String,
    ch_num: Number,
    tags: [String]
});

module.exports = {
    schema: chapterSchema,
    model: mongoose.model('Chapter', chapterSchema)
};