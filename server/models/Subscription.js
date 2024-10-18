
import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    startDate: Date,
    endDate: Date,
    allowedDays: Number,
    status: { type: String, enum: ['active', 'paused', 'expired'] },
    renewalDate: Date,
});


const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;