// config/mongoose.config.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pizza-time', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));
