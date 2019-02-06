const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { book: { 
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
        ]}
    });
});

module.exports = router;