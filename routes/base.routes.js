const express = require('express')
const User = require('../models/user.model')
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




//FAVORITAS
//vista favoritas

router.get('/perfil/favoritas', ensureAuthenticated, (req, res) => {
    
    const userId = req.user.id

    User
        .findById(userId)
        .then(user => res.render('auth/favourites', user))
        .catch(err => console.log(err))  
})

//Guardar favoritas

router.post('/perfil/favoritas/:id', ensureAuthenticated, (req, res) => {

    const influId = req.params.id

    const { id, favourites } = req.user
    
    let influFav = [...favourites]

    let newFav = influFav.filter(elm => !(elm.includes(influId)))

    User
        .findByIdAndUpdate({ id }, { favourites: newFav })
        .then(() => res.redirect('auth/favourites'))
        .catch(err => console.log(err))  
})

//Borrar de favoritas




module.exports = router
