const express = require('express');
const router = express.Router();

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

//define, get & post route for our trips endpoint
router 
    .route('/trips')
    .get(tripsController.tripsList) // GET Method routes tripList
    .post(tripsController.tripsAddTrip); //POST Method Adds a Trip


// GET/Update Methods routes tripsFindByCode = requires a code parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // GET Method routes tripsFindByCode
    .put(tripsController.tripsUpdateTrip);// PUT Method routes tripsUpdateTrip


module.exports = router;

