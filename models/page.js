const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    p_title: String,
    p_num: Number,
    tags: [String],
    p_content: [String]
});

module.exports = {
    schema: pageSchema,
    model: mongoose.model('Page', pageSchema)
};