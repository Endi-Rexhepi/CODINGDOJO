const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');

router.post('/orders/create', orderController.createOrder);
router.get('/orders', orderController.getOrders);
router.delete('/orders/:id', orderController.deleteOrder);
router.put('/orders/:id', orderController.updateOrder);
router.get('/orders/surpriseMe', orderController.surpriseMe);
router.post('/favoritePizza', orderController.setFavoritePizza);
router.get('/favoritePizza', orderController.getFavoritePizza);

module.exports = router;
