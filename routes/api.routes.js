const express = require('express')
const router = express.Router()

const Agency = require('./../models/agency.model')

// Endpoints
// router.get('/', (req, res) => res.render('index'))


router.get('/agency', (req, res) => {

    Agency 
        .find()
        .then(agency => res.json(agency))
        .catch(err => next(err))
    })
   


module.exports = router