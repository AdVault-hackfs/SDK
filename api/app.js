import express from 'express';
import bodyParser from 'body-parser';
import adRoutes from './routes/adRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/ads', adRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
