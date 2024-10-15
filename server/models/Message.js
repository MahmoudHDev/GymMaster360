// For Whatsapp Messages
import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema({
    member: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    dateSent: { type: Date, default: Date.now },
    messageContent: String,
    messageType: { type: String, enum: ['renewal', 'expiration'] },
});


const Message = mongoose.model('Message', messageSchema);

export default Message;