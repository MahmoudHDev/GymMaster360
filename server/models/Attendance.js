import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
    personId: { type: mongoose.Schema.Types.ObjectId, refPath: 'onModel' },
    onModel: { type: String, enum: ['Member', 'Coach'] },
    date: { type: Date, default: Date.now },
    status: { type: String, enum: ['present', 'absent', 'late'] },
    checkInTime: Date,
    checkOutTime: Date,
});


const Attendance = mongoose.model('Attendance', AttendanceSchema);

export default Attendance;