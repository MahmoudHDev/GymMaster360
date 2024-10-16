// Attendance tracking
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const router = express.Router();


router.get('/attendance', (req, res) => {

    res.send("Attendance page get");

})

router.post('/attendance', (req, res) => {

    res.send("Attendance page post");

})


export default router;