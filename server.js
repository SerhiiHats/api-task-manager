import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from "./routes/taskRoutes.js";
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from "./config/swagger.js";

const app = express();
const PORT = 5050;
app.use(bodyParser.json());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(
        `Server started on PORT:${PORT} and starting at http://localhost:${PORT}`
    );
});
