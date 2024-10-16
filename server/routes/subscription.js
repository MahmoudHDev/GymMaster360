// Subscription-related operations


import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/GymMaster360');         // To make a CRUD
const router = express.Router();


router.get('/subscription', (req, res) => {
    res.send("subscription API pages get")
});

router.post('/subscription', (req, res) => {
    res.send("subscription API pages post")

});


export default router;