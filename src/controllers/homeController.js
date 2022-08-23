let getHomePage = (req, res, next) =>{
    res.render('home');
}
let getAboutPage = (req, res, next) =>{
    res.render('about');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage

}