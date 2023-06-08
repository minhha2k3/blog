const Courses = require('../models/Course')

class CourseController {

    index(req, res, next) {
        Courses.find({}).lean()
            .then(courses => {
                res.render('home', { courses });
            })
            .catch(next);

    }
    //[GET] /course:slug
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug }).lean()
        .then(course => {
            res.render('courses/show',  { course })
        })
        .catch(next)
    }

    
}

module.exports = new CourseController();
