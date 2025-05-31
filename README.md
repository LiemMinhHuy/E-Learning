# E-Learning Platform

## Overview
A modern online learning platform built with MERN stack that enables instructors to create courses and students to learn effectively.

## Models

### User
```javascript
{
  _id: ObjectId,
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' },
  avatar: { type: String },
  bio: { type: String },
  contact: {
    phone: { type: String },
    address: { type: String }
  },
  socialLinks: {
    facebook: { type: String },
    linkedin: { type: String },
    twitter: { type: String }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Course
```javascript
{
  _id: ObjectId,
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  description: { type: String, required: true },
  instructor: { type: ObjectId, ref: 'User' },
  thumbnail: { type: String },
  price: { type: Number, default: 0 },
  discount: {
    percentage: { type: Number },
    validUntil: { type: Date }
  },
  lessons: [{ type: ObjectId, ref: 'Lesson' }],
  category: { type: String },
  subCategory: { type: String },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  language: { type: String },
  requirements: [{ type: String }],
  whatYouWillLearn: [{ type: String }],
  rating: { type: Number, default: 0 },
  enrollmentCount: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Lesson
```javascript
{
  _id: ObjectId,
  title: { type: String, required: true },
  description: { type: String },
  courseId: { type: ObjectId, ref: 'Course', required: true },
  content: {
    type: { type: String, enum: ['video', 'text', 'quiz'], required: true },
    videoUrl: { type: String },
    textContent: { type: String },
    duration: { type: Number }  // in minutes
  },
  attachments: [{
    name: { type: String },
    url: { type: String },
    type: { type: String }
  }],
  order: { type: Number, required: true },
  isPublished: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Quiz
```javascript
{
  _id: ObjectId,
  lessonId: { type: ObjectId, ref: 'Lesson' },
  questions: [{
    question: { type: String, required: true },
    options: [{ type: String }],
    correctAnswer: { type: Number, required: true },
    points: { type: Number, default: 1 }
  }],
  timeLimit: { type: Number },  // in minutes
  passingScore: { type: Number, required: true }
}
```

### Enrollment
```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: 'User', required: true },
  courseId: { type: ObjectId, ref: 'Course', required: true },
  progress: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'completed', 'dropped'], default: 'active' },
  completedLessons: [{ type: ObjectId, ref: 'Lesson' }],
  certificateIssued: { type: Boolean, default: false },
  enrolledAt: { type: Date, default: Date.now },
  completedAt: { type: Date }
}
```

### Review
```javascript
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: 'User', required: true },
  courseId: { type: ObjectId, ref: 'Course', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

## Features

### For Students
- Course browsing and search
- Course enrollment and progress tracking
- Interactive quizzes and assignments
- Course reviews and ratings
- Progress certificates
- Personal learning dashboard
- Bookmarking courses and lessons

### For Instructors
- Course creation and management
- Content upload (video, text, files)
- Student progress monitoring
- Quiz creation and grading
- Revenue tracking
- Analytics dashboard

### General Features
- Authentication and authorization
- Payment integration
- Real-time notifications
- Mobile responsive design
- Multi-language support
- Dark/Light mode

## Tech Stack

### Frontend
- React.js
- Redux Toolkit
- Material UI
- Axios
- Socket.io-client
- React Query
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Socket.io
- Multer (file uploads)
- Nodemailer

### DevOps & Tools
- Git & GitHub
- Docker
- AWS S3 (file storage)
- MongoDB Atlas
- Stripe (payments)
- Jest (testing)

## Installation

```bash
# Clone repository
git clone https://github.com/yourusername/e-learning-platform.git

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd frontend
npm install

# Set up environment variables
cp .env.example .env

# Run development servers
# Backend
npm run dev

# Frontend
npm start
```

## Environment Variables

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## API Documentation
API documentation is available at `/api-docs` when running the server.