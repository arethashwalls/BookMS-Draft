const db = require('./connection');
const models = require('../../models');
const seedPages = require('./seed_pages');
const { Author, Book, Chapter, Page } = models;

const getPageArray = chapter => {
    let pageCount = 1;
    let allPages = [];
    seedPages[chapter].forEach(page => {
        const newPage = new Page.model({
            p_num: pageCount,
            p_content: page
        });
        newPage.save();
        allPages.push(newPage);
        pageCount++;
    });
    return allPages;
}

db.once('open', function () {
    const doyle = new Author.model({
        name: 'Arthur Conan Doyle'
    });
    let c1pages = getPageArray('c1'), c2pages = getPageArray('c2');
    const chapter1 = new Chapter.model({
        ch_title: 'Chapter 1',
        ch_num: 1,
        pages: c1pages
    });
    const chapter2 = new Chapter.model({
        ch_title: 'Chapter 2',
        ch_num: 2,
        pages: c2pages
    })
    const scandalInBohemia = new Book.model({
        title: 'A Scandal in Bohemia',
        cover: 'assets/images/bohemia-cover.jpg',
        authors: [doyle],
        chapters: [chapter1, chapter2],
    });

    doyle.save();
    chapter1.save();
    chapter2.save();
    scandalInBohemia.save();
});