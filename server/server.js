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


const app = express();
const port = 9000;




// PORT || 9000
app.listen(port, () => {
    console.log("App Started listening")
    // console.log(uuidv4());
});