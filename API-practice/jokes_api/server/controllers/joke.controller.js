// CRUD //
// import model //
const Joke = require("../models/joke.model");

module.exports = {
  // View all //
  findAllJokes: (req, res) => {
    Joke.find()
      .then((allJokes) => res.json({ jokes: allJokes }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },

  //  View one //
  findOne: (req, res) => {
    Joke.findOne({ _id: req.params._id })
      .then((oneJoke) => res.json({ joke: oneJoke }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },

  // Create //
  createNewJoke: (req, res) => {
    Joke.create(req.body)
      .then((newJoke) => res.json({ joke: newJoke }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },

  // Update //
  updateJoke: (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params._id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedJoke) => res.json({ joke: updatedJoke }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },

  // Delete //
  deleteJoke: (req, res) => {
    Joke.deleteOne({ _id: req.params._id })
      .then((result) => res.json({ result: result }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  },
};
