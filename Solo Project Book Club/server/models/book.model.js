const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    minlength: [3, "Book title must be at least 3 characters long"]
  },
  description: {
    type: String,
    required: [true, "Book description is required"],
    minlength: [5, "Book description must be at least 5 characters long"]
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "Book creator is required"]
  },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;


// const mongoose = require('mongoose');

// const BookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "Book title is required"],
//     minlength: [3, "Book title must be at least 3 characters long"]
//   },
//   description: {
//     type: String,
//     required: [true, "Book description is required"],
//     minlength: [5, "Book description must be at least 5 characters long"]
//   },
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: [true, "Book creator is required"]
//   },
//   favorites: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   }]
// }, { timestamps: true });

// const Book = mongoose.model('Book', BookSchema);
// module.exports = Book;
  

