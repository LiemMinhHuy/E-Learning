const Category = require('../src/app/models/Category');

const categories = [
    {
        name: 'Web Development',
        description: 'Learn web development technologies like HTML, CSS, JavaScript, and more'
    },
    {
        name: 'Mobile Development',
        description: 'Build mobile apps for iOS and Android platforms'
    },
    {
        name: 'Data Science',
        description: 'Master data analysis, machine learning, and statistics'
    },
    {
        name: 'Business',
        description: 'Business strategy, marketing, and entrepreneurship courses'
    },
    {
        name: 'Design',
        description: 'UI/UX design, graphic design, and digital art'
    }
];

async function seedCategories() {
    try {
        const seededCategories = await Category.insertMany(categories);
        console.log('Categories seeded successfully');
        return seededCategories;
    } catch (error) {
        console.error('Error seeding categories:', error);
    }
}

module.exports = seedCategories;