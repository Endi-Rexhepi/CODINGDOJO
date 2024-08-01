const Pet = require('../models/pet.model');

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then((response) => {
            res.json({ pets: response });
        })
        .catch((err) => {
            console.error(err);
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(one => {
            res.json({ pet: one });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newInfo => {
            res.json({ pet: newInfo });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => {
            res.json({ pet: updatedPet });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}



