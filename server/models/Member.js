import mongoose from 'mongoose';



const memberSchema = new mongoose.Schema({
    gymOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    gender: { type: String, enum: ['male', 'female'] },
    contactNumber: String,
    subscriptionStartDate: Date,
    subscriptionEndDate: Date,
    remainingDays: Number,
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
    subscriptionStatus: { type: String, enum: ['active', 'expired', 'paused'] },
    numberOfAllowedDays: Number,
});

const Member = mongoose.model('Member', memberSchema);

export default Member;