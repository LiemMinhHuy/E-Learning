const Coupon = require('../src/app/models/Coupon');

async function seedCoupons() {
    try {
        const coupons = [
            {
                code: 'WELCOME2024',
                discount: 20, // 20% off
                valid_from: new Date('2024-01-01'),
                valid_to: new Date('2024-12-31'),
                usage_limit: 100
            },
            {
                code: 'SUMMER25',
                discount: 25,
                valid_from: new Date('2024-06-01'),
                valid_to: new Date('2024-08-31'),
                usage_limit: 50
            },
            {
                code: 'NEWSTUDENT',
                discount: 15,
                valid_from: new Date('2024-01-01'),
                valid_to: new Date('2024-12-31'),
                usage_limit: 200
            },
            {
                code: 'FLASH50',
                discount: 50,
                valid_from: new Date('2024-04-01'),
                valid_to: new Date('2024-04-30'),
                usage_limit: 25
            }
        ];

        const seededCoupons = await Coupon.insertMany(coupons);
        console.log('Coupons seeded successfully');
        return seededCoupons;
    } catch (error) {
        console.error('Error seeding coupons:', error);
    }
}

module.exports = seedCoupons;