const { Authors } = require('../models/author.model');

//Create
module.exports.create = (req, res) => {
  Authors.create(req.body)
    .then((author) => { console.log("Success"); res.json(author); })
    .catch((error) => {
      console.log("Something went wrong (create)", error);
      res.status(400).json(error)
    });
}

//Get All
module.exports.getAll = (req, res) => {
  // Add collation to sort insensitive, numeric ordering in case some name has numbers
  Authors.find({}).collation({ locale: "es", numericOrdering: true }).sort({ name: 1 })
    .then(Authors => res.json(Authors))
    .catch((error) => console.log("Something went wrong (getAll)", error));
}

//Get one author
module.exports.getOne = (req, res) => {
  Authors.findById(req.params.id)
    .then(author => res.json(author))
    .catch((error) => console.log("Something went wrong (getOne)", error));
}

//Update author
module.exports.update = (req, res) => {
  Authors.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch((error) => {
      console.log("Something went wrong (update)", error);
      res.status(400).json(error)
    });
}

//Delete author
module.exports.delete = (req, res) => {
  Authors.findByIdAndDelete(req.params.id)
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch((error) => console.log("Something went wrong (delete)", error));
}