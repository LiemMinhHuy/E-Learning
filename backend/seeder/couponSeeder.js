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
            },
            // Thêm 10 coupon mẫu mới
            {
                code: 'SPRING10',
                discount: 10,
                valid_from: new Date('2025-03-01'),
                valid_to: new Date('2025-05-31'),
                usage_limit: 80
            },
            {
                code: 'AUTUMN15',
                discount: 15,
                valid_from: new Date('2025-09-01'),
                valid_to: new Date('2025-11-30'),
                usage_limit: 60
            },
            {
                code: 'WINTER30',
                discount: 30,
                valid_from: new Date('2025-12-01'),
                valid_to: new Date('2025-12-31'),
                usage_limit: 40
            },
            {
                code: 'STUDENT5',
                discount: 5,
                valid_from: new Date('2025-01-01'),
                valid_to: new Date('2025-12-31'),
                usage_limit: 500
            },
            {
                code: 'VIP40',
                discount: 40,
                valid_from: new Date('2025-06-01'),
                valid_to: new Date('2025-12-31'),
                usage_limit: 20
            },
            {
                code: 'BLACKFRIDAY',
                discount: 60,
                valid_from: new Date('2025-11-28'),
                valid_to: new Date('2025-11-29'),
                usage_limit: 100
            },
            {
                code: 'CYBERMONDAY',
                discount: 55,
                valid_from: new Date('2025-12-01'),
                valid_to: new Date('2025-12-02'),
                usage_limit: 70
            },
            {
                code: 'FREESHIP',
                discount: 8,
                valid_from: new Date('2025-01-01'),
                valid_to: new Date('2025-12-31'),
                usage_limit: 300
            },
            {
                code: 'EARLYBIRD',
                discount: 12,
                valid_from: new Date('2025-02-01'),
                valid_to: new Date('2025-03-31'),
                usage_limit: 90
            },
            {
                code: 'LOYALTY20',
                discount: 20,
                valid_from: new Date('2025-01-01'),
                valid_to: new Date('2025-12-31'),
                usage_limit: 150
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