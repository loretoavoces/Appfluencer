const express = require('express')
const router = express.Router()

const Influ = require('./../models/influ.model')

// Endpoints
// router.get('/', (req, res) => res.render('index'))


router.get('/map', (req, res) => {

    Influ 
        .find()
        .then(agency => res.json(agency))
        .catch(err => next(err))
    })
   


module.exports = router