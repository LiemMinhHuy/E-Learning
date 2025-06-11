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
            },
            {
                course_id: courses[2]._id,
                title: 'Data Preprocessing',
                video_url: 'https://example.com/videos/data-preprocessing.mp4',
                duration: '50:00',
                content: 'Techniques for preparing data for machine learning',
                order: 2
            },
            // Data Science Course Lessons
            {
                course_id: courses[3]._id,
                title: 'Statistics for Data Science',
                video_url: 'https://example.com/videos/statistics-ds.mp4',
                duration: '60:00',
                content: 'Understanding statistical concepts for data analysis',
                order: 1
            },
            {
                course_id: courses[3]._id,
                title: 'Data Visualization with Python',
                video_url: 'https://example.com/videos/data-visualization.mp4',
                duration: '55:00',
                content: 'Creating visualizations using Python libraries',
                order: 2
            },
            // Thêm 10 lesson mẫu mới
            {
                course_id: courses[0]._id,
                title: 'HTML Forms and Inputs',
                video_url: 'https://example.com/videos/html-forms.mp4',
                duration: '40:00',
                content: 'Learn how to create forms and input fields in HTML',
                order: 3
            },
            {
                course_id: courses[0]._id,
                title: 'Responsive Web Design',
                video_url: 'https://example.com/videos/responsive-design.mp4',
                duration: '48:00',
                content: 'Techniques for making websites responsive',
                order: 4
            },
            {
                course_id: courses[1]._id,
                title: 'SwiftUI Introduction',
                video_url: 'https://example.com/videos/swiftui-intro.mp4',
                duration: '52:00',
                content: 'Getting started with SwiftUI for iOS apps',
                order: 3
            },
            {
                course_id: courses[1]._id,
                title: 'Networking in iOS',
                video_url: 'https://example.com/videos/ios-networking.mp4',
                duration: '47:00',
                content: 'How to make network requests in iOS apps',
                order: 4
            },
            {
                course_id: courses[2]._id,
                title: 'Supervised Learning',
                video_url: 'https://example.com/videos/supervised-learning.mp4',
                duration: '53:00',
                content: 'Introduction to supervised machine learning algorithms',
                order: 3
            },
            {
                course_id: courses[2]._id,
                title: 'Unsupervised Learning',
                video_url: 'https://example.com/videos/unsupervised-learning.mp4',
                duration: '49:00',
                content: 'Clustering and dimensionality reduction techniques',
                order: 4
            },
            {
                course_id: courses[3]._id,
                title: 'Big Data Basics',
                video_url: 'https://example.com/videos/big-data.mp4',
                duration: '58:00',
                content: 'Introduction to big data concepts and tools',
                order: 3
            },
            {
                course_id: courses[3]._id,
                title: 'Data Cleaning',
                video_url: 'https://example.com/videos/data-cleaning.mp4',
                duration: '46:00',
                content: 'How to clean and preprocess data for analysis',
                order: 4
            },
            {
                course_id: courses[0]._id,
                title: 'JavaScript Basics',
                video_url: 'https://example.com/videos/js-basics.mp4',
                duration: '55:00',
                content: 'Learn the basics of JavaScript programming',
                order: 5
            },
            {
                course_id: courses[1]._id,
                title: 'App Deployment',
                video_url: 'https://example.com/videos/app-deployment.mp4',
                duration: '42:00',
                content: 'How to deploy your iOS app to the App Store',
                order: 5
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