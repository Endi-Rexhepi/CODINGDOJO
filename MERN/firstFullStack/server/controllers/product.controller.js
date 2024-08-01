const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((response) => {
            res.json({ products: response });
        })
        .catch((err) => {
            console.error(err);
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(one => {
            res.json({ product: one });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newInfo => {
            res.json({ product: newInfo });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

