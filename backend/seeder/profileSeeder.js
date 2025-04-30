const Profile = require('../src/app/models/Profile');
const User = require('../src/app/models/User');

async function seedProfiles() {
    try {
        const users = await User.find();
        
        const profiles = [
            {
                user_id: users[0]._id, // admin
                bio: 'Platform administrator with extensive experience in e-learning systems.'
            },
            {
                user_id: users[1]._id, // instructor1
                bio: 'Senior web developer with 10+ years of experience. Passionate about teaching and helping others learn.'
            },
            {
                user_id: users[2]._id, // instructor2
                bio: 'Machine learning expert and data scientist. Previously worked at top tech companies.'
            },
            {
                user_id: users[3]._id, // student1
                bio: 'Aspiring web developer looking to build a career in tech.'
            },
            {
                user_id: users[4]._id, // student2
                bio: 'Currently studying computer science and exploring different areas of programming.'
            }
        ];

        const seededProfiles = await Profile.insertMany(profiles);
        console.log('Profiles seeded successfully');
        return seededProfiles;
    } catch (error) {
        console.error('Error seeding profiles:', error);
    }
}

module.exports = seedProfiles;