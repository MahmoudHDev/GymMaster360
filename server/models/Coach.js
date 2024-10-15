import mongoose from 'mongoose';


const coachSchema = new mongoose.Schema({
    gymOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    contactNumber: String,
    hireDate: Date,
    attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
    role: { type: String, enum: ['coach'] },  // Fixed role for coaches
});



const Coach = mongoose.model("Coach", coachSchema);


export default Coach;