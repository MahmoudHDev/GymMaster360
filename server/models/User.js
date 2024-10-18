// Gym Owner/Admin Schema
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import findOrCreate from 'mongoose-findorcreate';
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    role: { type: String, enum: ['owner', 'admin'] }, // Role of user
    gymName: String,
    contactNumber: { type: String, unique: true },
    createdAt: { type: Date, default: Date.now },
    branches: { type: Number, min: 0 }

});

// plugin for passport-local-mongoose --> Provide a register() method for saving and hashing the password
UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);



var User = mongoose.model('User', UserSchema);

export default User;
