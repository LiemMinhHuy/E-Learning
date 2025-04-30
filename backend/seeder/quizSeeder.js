const Quiz = require('../src/app/models/Quiz');
const Lesson = require('../src/app/models/Lesson');

async function seedQuizzes() {
    try {
        const lessons = await Lesson.find();
        
        const quizzes = [
            {
                lesson_id: lessons[0]._id, // HTML Lesson
                title: 'HTML Basics Quiz',
                questions: {
                    questions: [
                        {
                            question: 'What does HTML stand for?',
                            options: [
                                'Hyper Text Markup Language',
                                'High Tech Modern Language',
                                'Hyper Transfer Markup Language',
                                'Home Tool Markup Language'
                            ],
                            correctAnswer: 0
                        },
                        {
                            question: 'Which tag is used to create a paragraph in HTML?',
                            options: [
                                '<paragraph>',
                                '<p>',
                                '<para>',
                                '<text>'
                            ],
                            correctAnswer: 1
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[1]._id, // CSS Lesson
                title: 'CSS Fundamentals Quiz',
                questions: {
                    questions: [
                        {
                            question: 'Which property is used to change the text color?',
                            options: [
                                'text-color',
                                'font-color',
                                'color',
                                'text-style'
                            ],
                            correctAnswer: 2
                        },
                        {
                            question: 'What is the correct CSS syntax?',
                            options: [
                                'body:color=black',
                                '{body;color:black}',
                                'body {color: black}',
                                '{body:color=black}'
                            ],
                            correctAnswer: 2
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[2]._id, // Swift Lesson
                title: 'Swift Basics Quiz',
                questions: {
                    questions: [
                        {
                            question: 'Which keyword is used to declare a constant in Swift?',
                            options: [
                                'var',
                                'const',
                                'let',
                                'constant'
                            ],
                            correctAnswer: 2
                        },
                        {
                            question: 'What is the Swift type inference operator?',
                            options: [
                                ':=',
                                '::',
                                '=',
                                ':'
                            ],
                            correctAnswer: 0
                        }
                    ]
                }
            }
        ];

        const seededQuizzes = await Quiz.insertMany(quizzes);
        console.log('Quizzes seeded successfully');
        return seededQuizzes;
    } catch (error) {
        console.error('Error seeding quizzes:', error);
    }
}

module.exports = seedQuizzes;