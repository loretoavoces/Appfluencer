const express = require('express')
const router = express.Router()
const Agency = require('./../models/agency.model')

//Passport
const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next(): res.render('auth/login', {errorMsg: "Desautorizada, inicia sesión"})
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Desautorizada, no tienes permisos' })

//Mostrar todas las influencers
 
router.get('/', ensureAuthenticated, checkRole(['ADMIN', 'USER']), (req, res) => {

    Agency
        .find()
        .then(allAgencies => res.render('agency-map', {
            allAgencies,
                user: req.user,
                isAdmin: req.user.role.includes('ADMIN'),
                isUser: req.user.role.includes('USER')}))
        .catch(err => console.log(err))
    
})


module.exports = router