// const news = require('../models/news')

class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /new:slug
    show(req, res) {
        res.send('new details');
    }
}

module.exports = new NewsController();
