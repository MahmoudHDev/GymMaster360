// CRUD operations for members
import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/GymMaster360');
const router = express.Router();

router.get('/members', (req, res) => {
    res.send("members API pages get")
});

router.post('/members', (req, res) => {
    res.send("members API pages post")

});


export default router;