// Authentication routes
// import bcrypt from 'bcrypt';
import User from '../models/User.js';
import passport from 'passport';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';

mongoose.connect('mongodb://localhost:27017/GymMaster360');         // To make a CRUD
const router = express.Router();
router.use(bodyParser.json());


router.get("/login", (req, res) => {
    res.send("Login Page get request")
})

router.post('/login', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;


    // const user = new User({
    //     username: email,
    //     password: password
    // });

    r



});


export default router;