const express = require('express')
const router = express.Router()
const Agency = require('./../models/agency.model')

//Passport
const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next(): res.render('auth/login', {errorMsg: "Desautorizada, inicia sesión"})
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Desautorizada, no tienes permisos' })

//All agencies in the map
router.get('/', ensureAuthenticated, checkRole(['ADMIN', 'USER']), (req, res) => {

    Agency
        .find()
        .then(allAgencies => res.render('agencies/agency-map', {
            allAgencies,
                user: req.user,
                isAdmin: req.user.role.includes('ADMIN'),
                isUser: req.user.role.includes('USER')}))
        .catch(err => console.log(err))
    
})

router.get('/:id', (req, res) => {

    const agencyId = req.params.id

    Agency
        .findById(agencyId)
        .populate ('influencer')
        .then(agency => res.render('agencies/agency-details', agency))
        .catch (err => console.log (err))
})

module.exports = router