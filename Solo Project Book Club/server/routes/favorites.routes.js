// const express = require('express');
// const router = express.Router();
// const verifyToken = require('../middleware/auth');
// const { getUserFavorites, addFavorite, removeFavorite } = require('../controllers/favorites.controller');

// router.get('/:userId/favorites', verifyToken, getUserFavorites);
// router.post('/:bookId/favorite', verifyToken, addFavorite);
// router.post('/:bookId/unfavorite', verifyToken, removeFavorite);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { authenticate } = require('../config/jwt.config');
const { getUserFavorites, addFavorite, removeFavorite } = require('../controllers/favorites.controller');

router.get('/:userId/favorites', authenticate, getUserFavorites);
router.post('/:bookId/favorite', authenticate, addFavorite);
router.post('/:bookId/unfavorite', authenticate, removeFavorite);

module.exports = router;


