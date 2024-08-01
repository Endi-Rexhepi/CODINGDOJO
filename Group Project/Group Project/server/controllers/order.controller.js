const Order = require('../models/order.model');

exports.createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndDelete(id);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.surpriseMe = async (req, res) => {
    try {
        const toppings = ['Pepperoni', 'Onion', 'Pineapple', 'Sausage', 'Bacon', 'Mushrooms', 'Olives', 'Green Peppers', 'Tomatoes', 'Extra Cheese'];
        const randomToppings = [];
        for (let i = 0; i < 3; i++) {
            randomToppings.push(toppings[Math.floor(Math.random() * toppings.length)]);
        }
        const newOrder = new Order({
            method: 'CarryOut',
            size: 'Medium',
            crust: 'Thin Crust',
            toppings: randomToppings,
            quantity: 1,
            price: 12.99
        });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

let favoritePizza = null;

exports.setFavoritePizza = async (req, res) => {
    try {
        favoritePizza = req.body.pizzaDetails;
        res.status(200).json({ message: 'Favorite pizza set successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getFavoritePizza = async (req, res) => {
    try {
        res.status(200).json(favoritePizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
