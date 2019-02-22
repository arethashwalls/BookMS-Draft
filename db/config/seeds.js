const db = require('./connection');
const models = require ('../../models');
const {Author, Book, Chapter, Page} = models;
db.once('open', function() {
    const doyle = new Author.model({
        name: 'Arthur Conan Doyle'
    });
    const p1 = new Page.model({
        p_title: String,
        p_num: Number,
        tags: [String],
        p_content: [String]
    })



    // const scandalInBohemia = new Book({
    //     title: String,
    //     cover: String,
    //     authors: [authorSchema],
    //     tags: [String],
    //     chapters: [chapterSchema],
    //     stdalone_pages: [pageSchema],
    // });
});


// var silence = new Kitten({ name: 'Silence' });