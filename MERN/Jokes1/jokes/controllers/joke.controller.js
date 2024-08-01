const Joke = require('../models/Joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke });
        })
        .catch((err) => {
            console.error(err);
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            console.error(err); 
            res.json({ message: 'Something went wrong', error: err.message });
        });
}

