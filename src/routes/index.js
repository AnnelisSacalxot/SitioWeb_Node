const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Página Node'});
});

module.exports = router;