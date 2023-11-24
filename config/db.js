import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI_MONGO = `mongodb+srv://gatsserv:${process.env.MONGODB_KEY}@cluster0.myrely5.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(URI_MONGO)
    .then(() => {
        console.log('Connect to MongoDB successfully');
    })
    .catch((error) => {
        console.log('Connect to MongoDB failed: ' + error.message);
    });
