// Sending and tracking WhatsApp messages


import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/GymMaster360');         // To make a CRUD
const router = express.Router();


router.get('/messages', (req, res) => {
    res.send("messages API pages get")
});

router.post('/messages', (req, res) => {
    res.send("messages API pages post")

});


export default router;