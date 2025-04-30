# E-Learning Platform

A modern E-Learning platform built with MERN stack (MongoDB, Express.js, React.js, Node.js)

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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

### Course
```javascript
{
  _id: ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: ObjectId, ref: 'User' },
  thumbnail: { type: String },
  price: { type: Number, default: 0 },
  lessons: [{ type: ObjectId, ref: 'Lesson' }],
  category: { type: String },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },