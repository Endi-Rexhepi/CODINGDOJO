// const express = require('express');
// const cors = require('cors');
// const app = express();
// const cookieParser = require('cookie-parser');

// require('dotenv').config();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true
// }));
// app.use(cookieParser());

// require('./config/mongoose.config'); // Ensure this file configures mongoose correctly
// require('./routes/book.routes')(app); // Assuming book routes are properly defined
// require('./routes/user.routes')(app); // Assuming user routes are properly defined
// app.use(require('./routes/favorites.routes')); // Ensure this line is present

// app.listen(8000, () => {
//   console.log("Listening at Port 8000");
// });


const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());

require('./config/mongoose.config'); // Ensure this file configures mongoose correctly
require('./routes/book.routes')(app); // Ensure book routes are properly defined
require('./routes/user.routes')(app); // Ensure user routes are properly defined
app.use('/api/favorites', require('./routes/favorites.routes')); // Ensure favorites routes are properly defined

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
