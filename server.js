import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';
import authRoutes from './routers/authRoutes.js';
import taskRoutes from "./routers/taskRoutes.js";

const app = express();
const PORT = 5050;
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(
        `Server started on PORT:${PORT} and starting at http://localhost:${PORT}`
    );
});
