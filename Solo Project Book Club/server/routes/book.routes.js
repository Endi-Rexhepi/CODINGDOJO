// const BookController = require('../controllers/book.controller');
// const { authenticate } = require('../config/jwt.config');

// module.exports = app => {
//   app.get('/api/books', BookController.getAllBooks);
//   app.get('/api/books/:id', BookController.getOneBook);
//   app.get('/api/books/top', BookController.getTopThreeBooks);
//   app.post('/api/books', authenticate, BookController.createBook);
//   app.patch('/api/books/:id', authenticate, BookController.updateBook);
//   app.delete('/api/books/:id', authenticate, BookController.deleteBook);
//   app.post('/api/books/:id/favorite', authenticate, BookController.favoriteBook);
//   app.post('/api/books/:id/unfavorite', authenticate, BookController.unfavoriteBook);
// };

const BookController = require('../controllers/book.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get('/api/books', BookController.getAllBooks);
  app.get('/api/books/:id', BookController.getOneBook);
  app.get('/api/books/top', BookController.getTopThreeBooks);
  app.post('/api/books', authenticate, BookController.createBook);
  app.patch('/api/books/:id', authenticate, BookController.updateBook);
  app.delete('/api/books/:id', authenticate, BookController.deleteBook);
  app.post('/api/books/:id/favorite', authenticate, BookController.favoriteBook);
  app.post('/api/books/:id/unfavorite', authenticate, BookController.unfavoriteBook);
};

