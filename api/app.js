const express = require('express');
const bodyParser = require('body-parser');
const adRoutes = require('./routes/adRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/ads', adRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
