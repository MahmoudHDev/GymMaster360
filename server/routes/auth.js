// Authentication routes
// import bcrypt from 'bcrypt';
import User from '../models/User.js';
import passport from 'passport';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';
import pkg from 'twilio';



const { jwt } = pkg;
mongoose.connect('mongodb://localhost:27017/GymMaster360');         // To make a CRUD
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.post('/login', async (req, res, next) => {
   
   
   
    await passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.send('something went wrong'); // Redirect if login fails
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.send("Success!, Do something."); // Redirect if login succeeds
        });
    })(req, res, next);
});



router.post('/register', (req, res) => {
    const users = new User({
        email: req.body.email,
        username: req.body.username,
        role: "admin",
        gymName: "Gold Gym",
        contactNumber: "14101410",
        branches: 1
    });

    User.register(users, req.body.password, (err, user) => {
        if (err) {
            res.json({ success: false, message: "Your account could not be saved. Error: ", err })
        } else {
            res.json({ success: true, message: "Your account has been saved" })
        }
    });
    console.log(req.body);

})



export default router;
