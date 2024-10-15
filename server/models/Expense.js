import mongoose from 'mongoose';


const expenseSchema = new mongoose.Schema({
    gymOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    amount: Number,
    description: String,
    category: { type: String, enum: ['rent', 'utilities', 'equipment', 'salary', 'miscellaneous'] },
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;