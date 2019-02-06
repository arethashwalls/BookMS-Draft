const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:page', (req, res) => {
    const pageName = req.params.page;
    console.log(pageName);
    fs.readFile(path.join(__dirname, `../pages/${pageName}.html`), {encoding: 'utf-8'}, (err, data) => {
        if(err) console.log(err.stack);
        res.render('page', {page: {title: 'Hi', content: data}})
    })
});

module.exports = router;