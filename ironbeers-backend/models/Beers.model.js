const mongoose = require("mongoose");

const beersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    maxlength: 50,
  },
  attenuation_level: {
    type: Number,
    min: 0,
    max: 100,
  },
  image_url: {
    type: String,
    default: "https://images.punkapi.com/v2/keg.png",
  },
  contributed_by: String,
  is_alcoholic: {
    type: Boolean,
    default: true,
  },
});

const Beers = mongoose.model("Beers", beersSchema);

module.exports = Beers;
