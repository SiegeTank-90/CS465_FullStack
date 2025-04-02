const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register models
const Model = mongoose.model('trips');

// GET: /trips - list all the trips
// Regardless of outcome, response must include HTML status code
// add JSON message to the requesting client

const tripsList = async(req , res) => {
    const q = await Model
        .find({})  // All records
        .exec();

    //uncomment the following line to show results of query on the console
    //console.log(q);

    if (!q)  { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // return result trip list
        return res
            .status(200)
            .json(q);
    }
};



const tripsFindByCode = async(req , res) => {
    const q = await Model
        .find({ 'code': req.params.tripCode })  // Single record
        .exec();

    //uncomment the following line to show results of query on the console
    //console.log(q);

    if (!q)  { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // return result trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};