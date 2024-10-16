// Handling expenses data

import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/GymMaster360');

const router = express.Router();

router.get('/expenses', (req, res) => {
    res.send("expenses API pages get")
});

router.post('/expenses', (req, res) => {
    res.send("expenses API pages post")

});


export default router;