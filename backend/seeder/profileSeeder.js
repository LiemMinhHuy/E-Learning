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
            },
            // Thêm 10 profile mẫu mới (nếu có đủ user)
            {
                user_id: users[5]?._id,
                bio: 'Enthusiastic learner interested in mobile app development.'
            },
            {
                user_id: users[6]?._id,
                bio: 'Backend developer with a passion for scalable systems.'
            },
            {
                user_id: users[7]?._id,
                bio: 'UI/UX designer who loves creating beautiful interfaces.'
            },
            {
                user_id: users[8]?._id,
                bio: 'Full-stack developer and open-source contributor.'
            },
            {
                user_id: users[9]?._id,
                bio: 'Data analyst with a keen eye for detail.'
            },
            {
                user_id: users[10]?._id,
                bio: 'Cloud computing enthusiast and DevOps engineer.'
            },
            {
                user_id: users[11]?._id,
                bio: 'Cybersecurity student eager to learn new things.'
            },
            {
                user_id: users[12]?._id,
                bio: 'AI researcher and machine learning practitioner.'
            },
            {
                user_id: users[13]?._id,
                bio: 'Game developer and indie game creator.'
            },
            {
                user_id: users[14]?._id,
                bio: 'Content creator and online course reviewer.'
            }
        ];

        // Lọc bỏ các profile không có user_id hợp lệ (undefined)
        const validProfiles = profiles.filter(p => p.user_id !== undefined);
        const seededProfiles = await Profile.insertMany(validProfiles);
        console.log('Profiles seeded successfully');
        return seededProfiles;
    } catch (error) {
        console.error('Error seeding profiles:', error);
    }
}

module.exports = seedProfiles;