const Lesson = require('../src/app/models/Lesson');
const Course = require('../src/app/models/Course');

async function seedLessons() {
    try {
        const courses = await Course.find();
        
        const lessons = [
            // Web Development Course Lessons
            {
                course_id: courses[0]._id,
                title: 'Introduction to HTML',
                video_url: 'https://example.com/videos/html-intro.mp4',
                duration: '45:00',
                content: 'Learn the basics of HTML structure and common elements',
                order: 1
            },
            {
                course_id: courses[0]._id,
                title: 'CSS Fundamentals',
                video_url: 'https://example.com/videos/css-basics.mp4',
                duration: '50:00',
                content: 'Master CSS selectors, properties, and layouts',
                order: 2
            },
            // iOS Development Course Lessons
            {
                course_id: courses[1]._id,
                title: 'Swift Basics',
                video_url: 'https://example.com/videos/swift-intro.mp4',
                duration: '55:00',
                content: 'Introduction to Swift programming language',
                order: 1
            },
            {
                course_id: courses[1]._id,
                title: 'UIKit Essentials',
                video_url: 'https://example.com/videos/uikit-basics.mp4',
                duration: '60:00',
                content: 'Building iOS interfaces with UIKit',
                order: 2
            },
            // Machine Learning Course Lessons
            {
                course_id: courses[2]._id,
                title: 'Introduction to Python',
                video_url: 'https://example.com/videos/python-ml.mp4',
                duration: '45:00',
                content: 'Python basics for machine learning',
                order: 1
            }
        ];

        const seededLessons = await Lesson.insertMany(lessons);
        console.log('Lessons seeded successfully');
        return seededLessons;
    } catch (error) {
        console.error('Error seeding lessons:', error);
    }
}

module.exports = seedLessons;