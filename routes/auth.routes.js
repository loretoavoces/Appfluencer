
const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../models/user.model")
const Influ = require('../models/influ.model')

const bcrypt = require("bcryptjs")
const bcryptSalt = 10

const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next(): res.render('auth/login', {errorMsg: "Desautorizada, inicia sesión"})
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Desautorizada, no tienes permisos' })


// Registrase

router.get("/registro", (req, res) => res.render("auth/signup"))


router.post("/registro", (req, res, next) => {

    const { username, password } = req.body

    if (username.length === 0 || password.length === 0) {
        res.render("auth/signup", { errorMsg: "Rellena todos los campos" })
        return
    }

    User
        .findOne({ username })
        .then(user => {
            if (user) {
                res.render("auth/signup", { errorMsg: "La usuaria ya existe" })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass })
                .then(() => res.redirect('/'))
                .catch(() => res.render("auth/signup", { errorMsg: "Hubo un error" }))
        })
        .catch(error => next(error))
})


//Iniciar Sesión 

router.get('/inicio-sesion', (req, res) => res.render('auth/login'))


router.post("/inicio-sesion", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/registro",
    failureFlash: true,
    passReqToCallback: true
}))

// Cerrar sesión
router.get('/cerrar-sesion', (req, res) => {
    req.logout()
    res.redirect("/")
})

//FAVORITAS

//vista favoritas

router.get('/perfil/favoritas/:id', ensureAuthenticated, (req, res) => {
    
    const userId = req.user.id

    User
        .findById(userId)
        .then(user => res.render('auth/favourites', user))
        .catch(err => console.log(err))  
})

//Guardar favoritas

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



module.exports = router