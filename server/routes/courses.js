const router = require('express').Router();

const auth = require('../middlewares/auth')
const handler = require('../handlers');

router
    .route('/')
    .get(auth,handler.showCourses)

    .post(handler.createCourses)

router
    .route('/:id')
    .get(handler.getCourse)
    .delete(handler.deleteCourses)

module.exports = router;