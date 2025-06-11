const Course = require("../src/app/models/Course");
const User = require("../src/app/models/User");
const Category = require("../src/app/models/Category");

async function seedCourses() {
  try {
    // Get instructor IDs
    const instructors = await User.find({ role: "instructor" });
    const categories = await Category.find({});

    const courses = [
      {
        title: "Complete Web Development Bootcamp",
        description: "Learn full-stack web development from scratch",
        instructor_id: instructors[0]._id,
        categoryId: categories[0]._id,
        level: "Beginner",
        price: 49.99,
        thumbnail: "web-dev-bootcamp.jpg",
      },
      {
        title: "iOS App Development with Swift",
        description: "Build iOS apps using Swift and SwiftUI",
        instructor_id: instructors[0]._id,
        categoryId: categories[1]._id,
        level: "Intermediate",
        price: 59.99,
        thumbnail: "ios-dev.jpg",
      },
      {
        title: "Machine Learning A-Z",
        description: "Complete guide to Machine Learning and AI",
        instructor_id: instructors[1]._id,
        categoryId: categories[2]._id,
        level: "Advanced",
        price: 69.99,
        thumbnail: "machine-learning.jpg",
      },
      {
        title: "Digital Marketing Masterclass",
        description: "Learn modern digital marketing strategies",
        instructor_id: instructors[1]._id,
        categoryId: categories[3]._id,
        level: "Beginner",
        price: 39.99,
        thumbnail: "digital-marketing.jpg",
      },
      {
        title: "UI/UX Design Fundamentals",
        description: "Master the principles of UI/UX design",
        instructor_id: instructors[0]._id,
        categoryId: categories[4]._id,
        level: "Intermediate",
        price: 44.99,
        thumbnail: "uiux-design.jpg",
      },
      {
        title: "Data Science with Python",
        description: "Comprehensive course on Data Science using Python",
        instructor_id: instructors[1]._id,
        categoryId: categories[5]._id,
        level: "Advanced",
        price: 79.99,
        thumbnail: "data-science.jpg",
      },
      {
        title: "Introduction to Cybersecurity",
        description: "Learn the basics of cybersecurity and network security",
        instructor_id: instructors[0]._id,
        categoryId: categories[6]._id,
        level: "Beginner",
        price: 29.99,
        thumbnail: "cybersecurity.jpg",
      },
      {
        title: "Blockchain and Cryptocurrency Explained",
        description: "Understand blockchain technology and cryptocurrencies",
        instructor_id: instructors[1]._id,
        categoryId: categories[7]._id,
        level: "Intermediate",
        price: 54.99,
        thumbnail: "blockchain.jpg",
      },
      {
        title: "Game Development with Unity",
        description: "Create games using Unity and C#",
        instructor_id: instructors[0]._id,
        categoryId: categories[8]._id,
        level: "Advanced",
        price: 89.99,
        thumbnail: "game-development.jpg",
      },
        {
            title: "Photography Masterclass",
            description: "Learn photography techniques and editing skills",
            instructor_id: instructors[1]._id,
            categoryId: categories[9]._id,
            level: "Beginner",
            price: 34.99,
            thumbnail: "photography.jpg",
        },
        {
            title: "Introduction to Cloud Computing",
            description: "Basics of cloud computing and services",
            instructor_id: instructors[0]._id,
            categoryId: categories[10]._id,
            level: "Beginner",
            price: 24.99,
            thumbnail: "cloud-computing.jpg",
        },
        {
            title: "Advanced Java Programming",
            description: "Deep dive into Java programming and frameworks",
            instructor_id: instructors[1]._id,
            categoryId: categories[11]._id,
            level: "Advanced",
            price: 64.99,
            thumbnail: "java-programming.jpg",
        },
    ];

    const seededCourses = await Course.insertMany(courses);
    console.log("Courses seeded successfully");
    return seededCourses;
  } catch (error) {
    console.error("Error seeding courses:", error);
    throw error;
  }
}

module.exports = seedCourses;
