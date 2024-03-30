const Beers = require("../models/Beers.model");

const router = require("express").Router();

router.get("/beers", (req, res) => {
  Beers.find()
    .then((allBeers) => {
      res.json(allBeers);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/beers/:id", (req, res) => {
  Beers.findById(req.params.id)
    .then((oneBeer) => {
      res.json(oneBeer);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/beers", (req, res) => {
  Beers.create(req.body)
    .then((newBeer) => {
      res.json(newBeer);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/beers/:id", (req, res) => {
  Beers.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedBeer) => {
      res.json(updatedBeer);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/beers/:id", (req, res) => {
  Beers.findByIdAndDelete(req.params.id)
    .then((deletedBeer) => {
      res.json(deletedBeer);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
