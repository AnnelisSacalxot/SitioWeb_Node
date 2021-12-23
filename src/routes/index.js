const express = require('express');
const router = express.Router(); 

router.get('/',(req, res) =>{
     res.render('laboratorista', {title: 'Datos examen'});
 });

 module.exports = router;