const express = require('express');
const app = express();
const path = require('path');

//si se desea modificar el puerto del servidor se manejara
// con una constante
app.set('port', 3000);
//app.set('views', path.join(__dirname,'views'));//dirname: dar la direccion del archivo
//app.set('view engine' , 'ejs');

//middlewares

//routes
app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, 'views/index.html'));
    //res.render('index');
});

//static files

//listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});