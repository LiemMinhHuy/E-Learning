const User = require('../src/app/models/User');
const bcrypt = require('bcrypt');

const users = [
    {
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin',
        phoneNumber: '0123456789'
    },
    {
        email: 'instructor1@example.com',
        password: 'instructor123',
        role: 'instructor',
        phoneNumber: '0123456788'
    },
    {
        email: 'instructor2@example.com',
        password: 'instructor123',
        role: 'instructor',
        phoneNumber: '0123456787'
    },
    {
        email: 'student1@example.com',
        password: 'student123',
        role: 'student',
        phoneNumber: '0123456786'
    },
    {
        email: 'student2@example.com',
        password: 'student123',
        role: 'student',
        phoneNumber: '0123456785'
    }
];

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

async function seedUsers() {
    try {
        // Hash passwords before inserting
        const usersWithHashedPasswords = await Promise.all(
            users.map(async (user) => ({
                ...user,
                password: await hashPassword(user.password)
            }))
        );

        await User.insertMany(usersWithHashedPasswords);
        console.log('Users seeded successfully');
        return usersWithHashedPasswords; // Return for reference in other seeders
    } catch (error) {
        console.error('Error seeding users:', error);
    }
}

module.exports = seedUsers;