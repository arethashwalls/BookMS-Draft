const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: String
});

module.exports = {
    schema: authorSchema,
    model: mongoose.model('Author', authorSchema)
};