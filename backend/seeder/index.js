const mongoose = require('mongoose');
const User = require('../src/app/models/User');
const Category = require('../src/app/models/Category');
const Course = require('../src/app/models/Course');
const Lesson = require('../src/app/models/Lesson');
const Quiz = require('../src/app/models/Quiz');
const Profile = require('../src/app/models/Profile');
const Coupon = require('../src/app/models/Coupon');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/elearning', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));  

// Import seeders
const seedUsers = require('./userSeeder');
const seedCategories = require('./categorySeeder');
const seedCourses = require('./courseSeeder');
const seedLessons = require('./lessonSeeder');
const seedQuizzes = require('./quizSeeder');
const seedProfiles = require('./profileSeeder');
const seedCoupons = require('./couponSeeder');

async function seedDatabase() {
    try {
        // Clear existing data
        await mongoose.connection.dropDatabase();
        console.log('Database cleared');

        // Run seeders in sequence
        await seedUsers();
        await seedCategories();
        await seedCourses();
        await seedLessons();
        await seedQuizzes();
        await seedProfiles();
        await seedCoupons();

        console.log('All data seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedDatabase();