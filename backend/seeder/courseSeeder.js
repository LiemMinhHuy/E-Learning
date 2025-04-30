const Course = require('../src/app/models/Course');
const User = require('../src/app/models/User');
const Category = require('../src/app/models/Category');

async function seedCourses() {
    try {
        // Get instructor IDs
        const instructors = await User.find({ role: 'instructor' });
        const categories = await Category.find({});

        const courses = [
            {
                title: 'Complete Web Development Bootcamp',
                description: 'Learn full-stack web development from scratch',
                instructor_id: instructors[0]._id,
                categoryId: categories[0]._id,
                level: 'Beginner',
                price: 49.99,
                thumbnail: 'web-dev-bootcamp.jpg'
            },
            {
                title: 'iOS App Development with Swift',
                description: 'Build iOS apps using Swift and SwiftUI',
                instructor_id: instructors[0]._id,
                categoryId: categories[1]._id,
                level: 'Intermediate',
                price: 59.99,
                thumbnail: 'ios-dev.jpg'
            },
            {
                title: 'Machine Learning A-Z',
                description: 'Complete guide to Machine Learning and AI',
                instructor_id: instructors[1]._id,
                categoryId: categories[2]._id,
                level: 'Advanced',
                price: 69.99,
                thumbnail: 'machine-learning.jpg'
            },
            {
                title: 'Digital Marketing Masterclass',
                description: 'Learn modern digital marketing strategies',
                instructor_id: instructors[1]._id,
                categoryId: categories[3]._id,
                level: 'Beginner',
                price: 39.99,
                thumbnail: 'digital-marketing.jpg'
            },
            {
                title: 'UI/UX Design Fundamentals',
                description: 'Master the principles of UI/UX design',
                instructor_id: instructors[0]._id,
                categoryId: categories[4]._id,
                level: 'Intermediate',
                price: 44.99,
                thumbnail: 'uiux-design.jpg'
            }
        ];

        const seededCourses = await Course.insertMany(courses);
        console.log('Courses seeded successfully');
        return seededCourses;
    } catch (error) {
        console.error('Error seeding courses:', error);
        throw error;
    }
}

module.exports = seedCourses;