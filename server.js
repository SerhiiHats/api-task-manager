import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(
        `Server started on PORT:${PORT} and starting at http://localhost:${PORT}`
    );
});
