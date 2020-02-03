const express = require('express');

const app = express();

const paymentRoute = require('./routes/paymentRoute');

app.use(express.json());
app.use(paymentRoute);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
