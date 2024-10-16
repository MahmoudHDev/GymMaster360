import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import findOrCreate from 'mongoose-findorcreate';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';
import LocalStrategy from 'passport-local'
import session from 'express-session';
import 'dotenv/config';
import { v4 as uuidv4 } from 'uuid';
import Auth from './routes/auth.js';
import Attendance from './routes/attendance.js';
import Coaches from './routes/coaches.js';
import expenses from './routes/expenses.js';
import members from './routes/members.js';
import messages from './routes/messages.js';
import revenue from './routes/revenue.js';
import subscription from './routes/subscription.js';

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




// PORT || 9000
app.listen(port, () => {
    console.log("App Started listening")
    // console.log(uuidv4());
});