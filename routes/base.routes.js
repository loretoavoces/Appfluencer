const express = require('express')
const User = require('../models/user.model')
const Influ = require('../models/influ.model')
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



// //FAVORITAS
// //vista favoritas

// router.get('/perfil/favoritas', ensureAuthenticated, (req, res) => {
    
//     const userId = req.user.id

//     User
//         .findById(userId)
//         .then(user => res.render('auth/favourites', user))
//         .catch(err => console.log(err))  
// })

// //Guardar favoritas

// router.post('/perfil/favoritas/:id', ensureAuthenticated, (req, res) => {

//     const influId = req.query.id

//     User
        
//         .findById(influId)

//         .then(allFavsCreated => {

//             const favInflu = []
            
//             allFavsCreated.forEach(elm => {
//                 favInflu.push(Influ.findByIdAndUpdate(elm.influ, {$push:{influencer: elm._id}}))
//             })

//             return favInflu
//         })
//         .catch(err => console.log('Hubo un error,', err))
// })

// //Borrar de favoritas




module.exports = router
