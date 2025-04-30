const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    firstname: { 
        type: String, 
        required: [true, 'First name is required'] 
    },
    lastname: { 
        type: String, 
        required: [true, 'Last name is required'] 
    },
    email: { 
        type: String, 
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: { 
        type: String, 
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters']
    },
    avatar: { 
        type: String, 
        default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1920px-Flag_of_Vietnam.svg.png' 
    },
    role: { 
        type: String, 
        enum: ['student', 'instructor', 'admin'], 
        default: 'student' 
    },
    phoneNumber: { 
        type: String,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
});

module.exports = mongoose.model('User', User);
    