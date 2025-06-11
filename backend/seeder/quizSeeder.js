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
            },
            {
                lesson_id: lessons[3]._id,
                title: 'UIKit Essentials Quiz',
                questions: {
                    questions: [
                        {
                            question: 'What is UIKit used for?',
                            options: ['Web development', 'iOS UI development', 'Database management', 'Game design'],
                            correctAnswer: 1
                        },
                        {
                            question: 'Which class is used for buttons in UIKit?',
                            options: ['UIButton', 'UIInput', 'UIButtonView', 'UIBtn'],
                            correctAnswer: 0
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[4]._id,
                title: 'Python Basics Quiz',
                questions: {
                    questions: [
                        {
                            question: 'Which symbol is used for comments in Python?',
                            options: ['//', '#', '--', '/*'],
                            correctAnswer: 1
                        },
                        {
                            question: 'What is the output of print(2**3)?',
                            options: ['6', '8', '9', '5'],
                            correctAnswer: 1
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[5]._id,
                title: 'Data Preprocessing Quiz',
                questions: {
                    questions: [
                        {
                            question: 'Which library is commonly used for data manipulation in Python?',
                            options: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
                            correctAnswer: 1
                        },
                        {
                            question: 'What is data normalization?',
                            options: ['Scaling data', 'Sorting data', 'Deleting data', 'Encrypting data'],
                            correctAnswer: 0
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[6]._id,
                title: 'Statistics for Data Science Quiz',
                questions: {
                    questions: [
                        {
                            question: 'What is the mean of [2, 4, 6]?',
                            options: ['4', '6', '3', '5'],
                            correctAnswer: 0
                        },
                        {
                            question: 'Which is a measure of spread?',
                            options: ['Mean', 'Median', 'Variance', 'Mode'],
                            correctAnswer: 2
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[7]._id,
                title: 'Data Visualization Quiz',
                questions: {
                    questions: [
                        {
                            question: 'Which library is used for plotting in Python?',
                            options: ['Pandas', 'Matplotlib', 'NumPy', 'TensorFlow'],
                            correctAnswer: 1
                        },
                        {
                            question: 'What is a histogram?',
                            options: ['A type of plot', 'A data type', 'A function', 'A variable'],
                            correctAnswer: 0
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[8]._id,
                title: 'HTML Forms Quiz',
                questions: {
                    questions: [
                        {
                            question: 'Which tag is used for forms?',
                            options: ['<form>', '<input>', '<div>', '<span>'],
                            correctAnswer: 0
                        },
                        {
                            question: 'Which attribute is used for input type?',
                            options: ['type', 'input', 'form', 'name'],
                            correctAnswer: 0
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[9]._id,
                title: 'Responsive Design Quiz',
                questions: {
                    questions: [
                        {
                            question: 'What does media query do?',
                            options: ['Change color', 'Make site responsive', 'Add animation', 'None'],
                            correctAnswer: 1
                        },
                        {
                            question: 'Which unit is relative in CSS?',
                            options: ['px', 'em', 'cm', 'mm'],
                            correctAnswer: 1
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[10]._id,
                title: 'SwiftUI Quiz',
                questions: {
                    questions: [
                        {
                            question: 'SwiftUI is used for?',
                            options: ['Android', 'iOS', 'Windows', 'Linux'],
                            correctAnswer: 1
                        },
                        {
                            question: 'Which keyword creates a view in SwiftUI?',
                            options: ['View', 'struct', 'class', 'func'],
                            correctAnswer: 1
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[11]._id,
                title: 'Networking in iOS Quiz',
                questions: {
                    questions: [
                        {
                            question: 'Which protocol is used for HTTP requests?',
                            options: ['FTP', 'HTTP', 'SMTP', 'POP3'],
                            correctAnswer: 1
                        },
                        {
                            question: 'Which class handles URL requests?',
                            options: ['URLSession', 'NSURL', 'URLHandler', 'Session'],
                            correctAnswer: 0
                        }
                    ]
                }
            },
            {
                lesson_id: lessons[12]._id,
                title: 'Supervised Learning Quiz',
                questions: {
                    questions: [
                        {
                            question: 'Supervised learning uses?',
                            options: ['Labeled data', 'Unlabeled data', 'No data', 'Random data'],
                            correctAnswer: 0
                        },
                        {
                            question: 'Which is a supervised algorithm?',
                            options: ['KNN', 'K-means', 'PCA', 't-SNE'],
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