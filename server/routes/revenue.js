// Handling revenue data


import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/GymMaster360');         // To make a CRUD
const router = express.Router();


router.get('/revenue', (req, res) => {
    res.send("revenue API pages get")
});

router.post('/revenue', (req, res) => {
    res.send("revenue API pages post")

});


export default router;