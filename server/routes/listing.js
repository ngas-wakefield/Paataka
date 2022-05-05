const express = require('express')
const db = require('../db/connection')
const router = express.Router()

router.get('/foods', (req, res) => {
  db.getListings()
    .then((foods) => {
      return res.json(foods)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/food', (req, res) => {
  const newListing = req.body
  db.addListing(newListing)
    .then((idArr) => res.sendStatus(201))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

// not sure if req.params() is the right function to use here
router.get('/food/:id', (req, res) => {
  const id = req.params()
  console.log(id)
  db.getOneFood(id)
    .then((food) => res.json(food))
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

module.exports = router
