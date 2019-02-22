const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:page', (req, res) => {
    const pageName = req.params.page;
    res.render('page', {page: {title: 'What is uuup?', content: "<p>Here is a paragraph. <em>With an emphasis!</em></p> <p>Here's another.</p>"},
    book: { 
        title: 'Everybody Is Sad and Evil', 
        author: 'Aretha', 
        cover: 'https://i.imgflip.com/2c4ilx.jpg', 
        chapters: [
            {
                ch_title: 'Back When Life Was Just Kinda Miserable',
                ch_num: 1
            },
            {
                ch_title: 'Things Got Slightly Better',
                ch_num: 2
            },
            {
                ch_title: 'Then Much Worse',
                ch_num: 3
            }
        ]}})
});

module.exports = router;