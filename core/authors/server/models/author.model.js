const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name must be at least 3 characters"]
  }
}, { timestamps: true });

module.exports.Authors = mongoose.model("Authors", AuthorSchema);
