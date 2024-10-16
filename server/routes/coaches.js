// CRUD operations for coaches

import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/GymMaster360');         // To make a CRUD
const router = express.Router();


router.get('/coaches', (req, res) => {
    res.send("Coahes API pages get")
});

router.post('/coaches', (req, res) => {
    res.send("Coahes API pages post")

});


export default router;