// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: [true, 'First name is required'],
//     minlength: [2, 'First name must be at least 2 characters']
//   },
//   lastName: {
//     type: String,
//     required: [true, 'Last name is required'],
//     minlength: [2, 'Last name must be at least 2 characters']
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: [true, 'Email already exists'],
//     match: [/.+\@.+\..+/, 'Please enter a valid email address']
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: [8, 'Password must be at least 8 characters']
//   }
// }, { timestamps: true });

// UserSchema.pre('save', function(next) {
//   if (!this.isModified('password')) return next();

//   bcrypt.hash(this.password, 10)
//     .then(hash => {
//       this.password = hash;
//       next();
//     })
//     .catch(err => next(err));
// });

// const User = mongoose.model('User', UserSchema);
// module.exports = User;


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minlength: [2, 'First name must be at least 2 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: [2, 'Last name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists'],
    match: [/.+\@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters']
  },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, { timestamps: true });

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();

  bcrypt.hash(this.password, 10)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => next(err));
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
