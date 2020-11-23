const express = require('express')
const router = express.Router()


//Passport

const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next(): res.render('auth/login', {errorMsg: "Desautorizada, inicia sesión"})
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Desautorizada, no tienes permisos' })

// Base Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/mapa', (req, res) => res.render('agency-map'))

//ADMIN Y USER ENTRAN AL PERFIL
router.get('/perfil', ensureAuthenticated, checkRole(['ADMIN', 'USER']), (req, res) => res.render('profile', {
    user: req.user,
    isAdmin: req.user.role.includes('ADMIN'),
    isUser: req.user.role.includes('USER'),
    
}))




module.exports = router
