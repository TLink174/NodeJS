import express from 'express';
import homeController from '../../src/controllers/homeController'
let router = express.Router();

let webRouter = (app) =>{
    app.get('/', homeController.getHomePage);
    app.get('/about', homeController.getAboutPage);
    return app.use('/', router);


}
module.exports = webRouter;