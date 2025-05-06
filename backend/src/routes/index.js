const siteRouter = require('./site');
const courseRouter = require('./course');
const categoryRouter = require('./category');
const lessonRouter = require('./lesson');
const quizRouter = require('./quiz');
const authRouter = require('./auth');
const enrollmentRouter = require('./enrollment');

function route(app){
    app.use('/enrollments', enrollmentRouter);
    app.use('/auth', authRouter);
    app.use('/quizzes', quizRouter);
    app.use('/lessons', lessonRouter);
    app.use('/categories', categoryRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
}

module.exports = route;