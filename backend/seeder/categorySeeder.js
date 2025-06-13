const Category = require("../src/app/models/Category");

const categories = [
  {
    name: "Web Development",
    description:
      "Learn web development technologies like HTML, CSS, JavaScript, and more",
  },
  {
    name: "Mobile Development",
    description: "Build mobile apps for iOS and Android platforms",
  },
  {
    name: "Data Science",
    description: "Master data analysis, machine learning, and statistics",
  },
  {
    name: "Cybersecurity",
    description: "Learn the basics of cybersecurity and network security",
  },
  {
    name: "Cloud Computing",
    description: "Basics of cloud computing and services",
  },
  {
    name: "Java Programming",
    description: "Deep dive into Java programming and frameworks",
  },
  {
    name: "Blockchain",
    description: "Understand blockchain technology and cryptocurrencies",
  },
  {
    name: "Game Development",
    description: "Create games using Unity and C#",
  },
];

async function seedCategories() {
  try {
    const seededCategories = await Category.insertMany(categories);
    console.log("Categories seeded successfully");
    return seededCategories;
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
}

module.exports = seedCategories;
