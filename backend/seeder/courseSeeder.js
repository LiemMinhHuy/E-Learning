const Course = require("../src/app/models/Course");
const User = require("../src/app/models/User");
const Category = require("../src/app/models/Category");

async function seedCourses() {
  try {
    // Get instructor IDs
    const instructors = await User.find({ role: "instructor" });
    const categories = await Category.find();

    const courses = [
      // Web Development (categories[0])
      {
        title: "Complete Web Development Bootcamp",
        description: "Learn full-stack web development from scratch",
        instructor_id: instructors[0]._id,
        categoryId: categories[0]._id,
        level: "Beginner",
        price: 0.0, // Free course
        thumbnail: "web-dev-bootcamp.jpg",
      },
      {
        title: "React for Beginners",
        description: "Learn React from scratch and build modern web apps",
        instructor_id: instructors[1]._id,
        categoryId: categories[0]._id,
        level: "Beginner",
        price: 39.99,
        thumbnail: "react-beginners.jpg",
      },
      {
        title: "Advanced JavaScript",
        description: "Deep dive into JavaScript for web development",
        instructor_id: instructors[0]._id,
        categoryId: categories[0]._id,
        level: "Advanced",
        price: 0.0,
        thumbnail: "advanced-js.jpg",
      },

      // Mobile Development (categories[1])
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
        title: "Android Development Masterclass",
        description: "Build Android apps with Kotlin",
        instructor_id: instructors[1]._id,
        categoryId: categories[1]._id,
        level: "Intermediate",
        price: 54.99,
        thumbnail: "android-dev.jpg",
      },
      {
        title: "React Native Mobile Apps",
        description: "Cross-platform mobile apps with React Native",
        instructor_id: instructors[0]._id,
        categoryId: categories[1]._id,
        level: "Beginner",
        price: 44.99,
        thumbnail: "react-native.jpg",
      },

      // Data Science (categories[2])
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
        title: "Data Science with Python",
        description: "Comprehensive course on Data Science using Python",
        instructor_id: instructors[0]._id,
        categoryId: categories[2]._id,
        level: "Intermediate",
        price: 79.99,
        thumbnail: "data-science.jpg",
      },
      {
        title: "Statistics for Data Science",
        description: "Essential statistics for data analysis",
        instructor_id: instructors[1]._id,
        categoryId: categories[2]._id,
        level: "Beginner",
        price: 34.99,
        thumbnail: "statistics.jpg",
      },

      // Cybersecurity (categories[3])
      {
        title: "Introduction to Cybersecurity",
        description: "Learn the basics of cybersecurity and network security",
        instructor_id: instructors[0]._id,
        categoryId: categories[3]._id,
        level: "Beginner",
        price: 29.99,
        thumbnail: "cybersecurity.jpg",
      },
      {
        title: "Ethical Hacking Masterclass",
        description: "Become an ethical hacker and penetration tester",
        instructor_id: instructors[1]._id,
        categoryId: categories[3]._id,
        level: "Advanced",
        price: 69.99,
        thumbnail: "ethical-hacking.jpg",
      },

      // Cloud Computing (categories[4])
      {
        title: "Introduction to Cloud Computing",
        description: "Basics of cloud computing and services",
        instructor_id: instructors[0]._id,
        categoryId: categories[4]._id,
        level: "Beginner",
        price: 24.99,
        thumbnail: "cloud-computing.jpg",
      },
      {
        title: "AWS Certified Solutions Architect",
        description: "Prepare for AWS certification",
        instructor_id: instructors[1]._id,
        categoryId: categories[4]._id,
        level: "Intermediate",
        price: 59.99,
        thumbnail: "aws.jpg",
      },

      // Java Programming (categories[5])
      {
        title: "Advanced Java Programming",
        description: "Deep dive into Java programming and frameworks",
        instructor_id: instructors[1]._id,
        categoryId: categories[5]._id,
        level: "Advanced",
        price: 64.99,
        thumbnail: "java-programming.jpg",
      },
      {
        title: "Java for Beginners",
        description: "Start programming with Java",
        instructor_id: instructors[0]._id,
        categoryId: categories[5]._id,
        level: "Beginner",
        price: 34.99,
        thumbnail: "java-beginners.jpg",
      },

      // Blockchain (categories[6])
      {
        title: "Blockchain and Cryptocurrency Explained",
        description: "Understand blockchain technology and cryptocurrencies",
        instructor_id: instructors[1]._id,
        categoryId: categories[6]._id,
        level: "Intermediate",
        price: 54.99,
        thumbnail: "blockchain.jpg",
      },
      {
        title: "Ethereum Smart Contracts",
        description: "Develop smart contracts on Ethereum",
        instructor_id: instructors[0]._id,
        categoryId: categories[6]._id,
        level: "Advanced",
        price: 69.99,
        thumbnail: "ethereum.jpg",
      },

      // Game Development (categories[7])
      {
        title: "Game Development with Unity",
        description: "Create games using Unity and C#",
        instructor_id: instructors[0]._id,
        categoryId: categories[7]._id,
        level: "Advanced",
        price: 89.99,
        thumbnail: "game-development.jpg",
      },
      {
        title: "2D Game Design Basics",
        description: "Learn to design 2D games",
        instructor_id: instructors[1]._id,
        categoryId: categories[7]._id,
        level: "Beginner",
        price: 29.99,
        thumbnail: "2d-game.jpg",
      },
      {
        title: "Unreal Engine Essentials",
        description: "Get started with Unreal Engine for games",
        instructor_id: instructors[0]._id,
        categoryId: categories[7]._id,
        level: "Intermediate",
        price: 49.99,
        thumbnail: "unreal.jpg",
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
