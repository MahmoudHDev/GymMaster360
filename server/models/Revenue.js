import mongoose from 'mongoose';



const revenueSchema = new mongoose.Schema({
    gymOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    amount: Number,
    description: String,
});



const Revenue = mongoose.model('Revenue', revenueSchema);

export default Revenue;