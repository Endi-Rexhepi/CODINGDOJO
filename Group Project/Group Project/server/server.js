const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/group_project', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', require('./routes/order.routes'));

app.listen(port, () => console.log(`Listening on port ${port}`));
