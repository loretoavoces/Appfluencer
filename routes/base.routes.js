const express = require('express')

const router = express.Router()



// Base Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/mapa', (req, res) => res.render('agency-map'))







module.exports = router
