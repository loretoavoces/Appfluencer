const express = require('express')
const router = express.Router()

const User = require("../models/user.model")

//Passport
const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next(): res.render('auth/login', {errorMsg: "Desautorizada, inicia sesión"})
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Desautorizada, no tienes permisos' })

//Base Endpoints
router.get('/', (req, res) => res.render('index'))
router.get('/mapa', (req, res) => res.render('agency-map'))


//Favourites
//Admin and User enter in profile 
router.get('/perfil', ensureAuthenticated, checkRole(['ADMIN', 'USER']), (req, res) => {

    User

        .findById(req.user._id)
        .populate('favourites')
        .then((user) => res.render('profile', { user, isAdmin: req.user.role.includes('ADMIN'), isUser: req.user.role.includes('USER')}))


    .catch(error => next(error))
})

//Add favourites

router.post('/influencer/favorita/:id', ensureAuthenticated, (req, res) => {
   
    User
        .findById(req.user._id)
        .then(user => {
            if (user.favourites.includes(req.params.id)) {
                res.redirect('/perfil')
            } else {
                return User.findByIdAndUpdate(user._id, { $push: { favourites: req.params.id } }, { new: true })
                    
                .then(() => {res.redirect('/perfil')})
            }
        })   
        .catch(err => console.log('Hubo un error,', err))
})


// Delete favourites

router.get('/influencer/favorita/borrar/:id', ensureAuthenticated, (req, res) => {
   
    User
        
        .findByIdAndUpdate(req.user._id, {$pull: {favourites: req.params.id}}, {new:true})
        .then(() => res.redirect('/perfil'))
        .catch(err => console.log('Hubo un error,', err))
})



// //ADMIN Y USER ENTRAN AL PERFIL
// router.get('/perfil', ensureAuthenticated, checkRole(['ADMIN', 'USER']), (req, res) => res.render('profile', {
//     user: req.user,
//     isAdmin: req.user.role.includes('ADMIN'),
//     isUser: req.user.role.includes('USER'),

// }))


module.exports = router
