import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import findOrCreate from 'mongoose-findorcreate';
import passport from 'passport';
// import passportLocalMongoose from 'passport-local-mongoose';
import LocalStrategy from 'passport-local'
import session from 'express-session';
import 'dotenv/config';
import Auth from './routes/auth.js';
import Attendance from './routes/attendance.js';
import Coaches from './routes/coaches.js';
import expenses from './routes/expenses.js';
import members from './routes/members.js';
import messages from './routes/messages.js';
import revenue from './routes/revenue.js';
import subscription from './routes/subscription.js';
import User from './models/User.js';
import mongoose from 'mongoose';
const app = express();
const port = 9000;

app.use(Auth);          // Auth Page
app.use(Attendance);    // Attendance route
app.use(Coaches);
app.use(expenses);
app.use(members);
app.use(messages);
app.use(revenue);
app.use(subscription);

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// cors
app.use(cors());
// express-Session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'yourSecretKeyyourSecretKeyyourSecretKey', // Change this to a secure key
    resave: false,
    saveUninitialized: false
}));


// Passoport-local-mongoose specific config
passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserialize user
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});


// Passoport setup
app.use(passport.initialize());
app.use(passport.session());
// Mongoose
mongoose.connect('mongodb://localhost:27017/GymMaster360');




// PORT || 9000
app.listen(port, () => {
    console.log("App Started listening")
    // console.log(uuidv4());
});