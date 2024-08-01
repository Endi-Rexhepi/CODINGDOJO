// const Book = require('../models/book.model');

// module.exports.getAllBooks = (req, res) => {
//   Book.find()
//     .populate('createdBy', 'firstName lastName')
//     .sort({ createdAt: -1 })
//     .then(allBooks => {
//       res.json({ books: allBooks });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).json({ message: 'Something went wrong', error: err });
//     });
// };

// module.exports.getOneBook = (req, res) => {
//   Book.findOne({ _id: req.params.id })
//     .populate('createdBy', 'firstName lastName')
//     .then(oneBook => {
//       res.json({ book: oneBook });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).json({ message: 'Something went wrong', error: err });
//     });
// };

// module.exports.getTopThreeBooks = (req, res) => {
//   Book.find().sort({ favorites: -1 }).limit(3)
//     .then(topBooks => {
//       res.json({ books: topBooks });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).json({ message: 'Something went wrong', error: err });
//     });
// };

// module.exports.createBook = (req, res) => {
//   const bookData = { ...req.body, createdBy: req.user._id };
//   Book.create(bookData)
//     .then(newlyCreatedBook => {
//       res.json({ book: newlyCreatedBook });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).json({ message: 'Something went wrong', error: err });
//     });
// };

// module.exports.updateBook = (req, res) => {
//   Book.findOneAndUpdate(
//     { _id: req.params.id, createdBy: req.user._id },
//     req.body,
//     { new: true }
//   )
//     .then(updatedBook => {
//       res.json({ book: updatedBook });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).json({ message: 'Something went wrong', error: err });
//     });
// };

// module.exports.deleteBook = (req, res) => {
//   Book.deleteOne({ _id: req.params.id, createdBy: req.user._id })
//     .then(result => {
//       res.json({ result });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(400).json({ message: 'Something went wrong', error: err });
//     });
// };

// module.exports.favoriteBook = (req, res) => {
//   Book.findByIdAndUpdate(
//     req.params.id,
//     { $addToSet: { favorites: req.user.id } },
//     { new: true }
//   )
//     .then(updatedBook => res.json({ book: updatedBook }))
//     .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
// };

// module.exports.unfavoriteBook = (req, res) => {
//   Book.findByIdAndUpdate(
//     req.params.id,
//     { $pull: { favorites: req.user.id } },
//     { new: true }
//   )
//     .then(updatedBook => res.json({ book: updatedBook }))
//     .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
// };
const Book = require('../models/book.model');

module.exports.getAllBooks = (req, res) => {
  Book.find()
    .populate('createdBy', 'firstName lastName')
    .sort({ createdAt: -1 })
    .then(allBooks => {
      res.json({ books: allBooks });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: 'Something went wrong', error: err });
    });
};

module.exports.getOneBook = (req, res) => {
  Book.findOne({ _id: req.params.id })
    .populate('createdBy', 'firstName lastName')
    .then(oneBook => {
      res.json({ book: oneBook });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: 'Something went wrong', error: err });
    });
};

module.exports.getTopThreeBooks = (req, res) => {
  Book.find().sort({ favorites: -1 }).limit(3)
    .then(topBooks => {
      res.json({ books: topBooks });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: 'Something went wrong', error: err });
    });
};

module.exports.createBook = (req, res) => {
  Book.create(req.body)
    .then(newlyCreatedBook => {
      res.json({ book: newlyCreatedBook });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: 'Something went wrong', error: err });
    });
};


module.exports.updateBook = (req, res) => {
  Book.findOneAndUpdate(
    { _id: req.params.id, createdBy: req.user._id },
    req.body,
    { new: true }
  )
    .then(updatedBook => {
      res.json({ book: updatedBook });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: 'Something went wrong', error: err });
    });
};

module.exports.deleteBook = (req, res) => {
  Book.deleteOne({ _id: req.params.id, createdBy: req.user._id })
    .then(result => {
      res.json({ result });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: 'Something went wrong', error: err });
    });
};

module.exports.favoriteBook = (req, res) => {
  Book.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { favorites: req.user.id } },
    { new: true }
  )
    .then(updatedBook => res.json({ book: updatedBook }))
    .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
};

module.exports.unfavoriteBook = (req, res) => {
  Book.findByIdAndUpdate(
    req.params.id,
    { $pull: { favorites: req.user.id } },
    { new: true }
  )
    .then(updatedBook => res.json({ book: updatedBook }))
    .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
};
