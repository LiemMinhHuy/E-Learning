const siteRouter = require('./site');
const courseRouter = require('./course');
const categoryRouter = require('./category');
const lessonRouter = require('./lesson');
const quizRouter = require('./quiz');
const authRouter = require('./auth');

function route(app){
    app.use('/auth', authRouter);
    app.use('/quizs', quizRouter);
    app.use('/lessons', lessonRouter);
    app.use('/categories', categoryRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
}

module.exports = route;