const express = require('express')
const router = express.Router()
const Agency = require('./../models/agency.model')


//Mostrar todas las influencers
 
router.get('/', (req, res) => {

    console.log ("holi")

    Agency
        .find()
        .then(allAgencies => res.render ('agency-map', { allAgencies }))
        .catch (err => console.log (err))
})


module.exports = router