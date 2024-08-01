// const User = require('../models/User');
// const Book = require('../models/Book');

// const getUserFavorites = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId).populate('favorites');
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ favorites: user.favorites });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const addFavorite = async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.bookId);
//     if (!book.favorites.includes(req.user.id)) {
//       book.favorites.push(req.user.id);
//       await book.save();
//       res.json({ message: 'Added to favorites' });
//     } else {
//       res.status(400).json({ message: 'Already a favorite' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const removeFavorite = async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.bookId);
//     if (book.favorites.includes(req.user.id)) {
//       book.favorites = book.favorites.filter(id => id.toString() !== req.user.id);
//       await book.save();
//       res.json({ message: 'Removed from favorites' });
//     } else {
//       res.status(400).json({ message: 'Not a favorite' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   getUserFavorites,
//   addFavorite,
//   removeFavorite
// };

const User = require('../models/user.model');

const getUserFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('favorites');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ favorites: user.favorites });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFavorite = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (!book.favorites.includes(req.user.id)) {
      book.favorites.push(req.user.id);
      await book.save();
      res.json({ message: 'Added to favorites' });
    } else {
      res.status(400).json({ message: 'Already a favorite' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFavorite = async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (book.favorites.includes(req.user.id)) {
      book.favorites = book.favorites.filter(id => id.toString() !== req.user.id);
      await book.save();
      res.json({ message: 'Removed from favorites' });
    } else {
      res.status(400).json({ message: 'Not a favorite' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserFavorites,
  addFavorite,
  removeFavorite
};
