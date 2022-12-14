import express from 'express';
import { engine } from 'express-handlebars';
let configViewEgine = (app) =>{
    app.use(express.static('./src/public'));
    app.engine('.hbs', engine({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    app.set('views', './src/views');
}
module.exports = configViewEgine