// Gym Owner/Admin Schema
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['owner', 'admin'] }, // Role of user
    gymName: String,
    contactNumber: String,
    createdAt: { type: Date, default: Date.now },
});



const User = mongoose.model('User', userSchema);

export default User;