const express = require('express')
const router = express.Router()

const Influ = require('./../models/influ.model')

 //Mostrar todas las influencers
router.get('/', (req, res) => {

    Influ
        .find()
        .then(allInflus => res.render ('influencers/all-influs', { allInflus }))
        .catch (err => console.log (err))
})


router.get('/crear-influencer', (req, res) => res.send('heheh'))







//Mostrar los detalles de cada influencer
router.get('/:id', (req, res) => {

    const influId = req.params.id
    
    Influ

        .findById(influId)
        .then(theInflu => res.render('influencers/details-influs', theInflu))
        .catch (err => console.log (err))
})




module.exports = router