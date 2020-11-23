const express = require('express')
const router = express.Router()
const Influ = require('./../models/influ.model')

//Passport
const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next(): res.render('auth/login', {errorMsg: "Desautorizada, inicia sesión"})
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Desautorizada, no tienes permisos' })



//Mostrar todas las influencers
 
router.get('/', ensureAuthenticated, checkRole(['ADMIN', 'USER']), (req, res) => {

    Influ
        .find()
        .then(allInflus => res.render('influencers/all-influs', {
            allInflus,
                user: req.user,
                isAdmin: req.user.role.includes('ADMIN'),
                isUser: req.user.role.includes('USER')}))
        .catch (err => console.log (err))
})


//Crear nueva influencer

router.get('/crear-influencer', (req, res) => res.render('influencers/new-influ'))

router.post('/crear-influencer', (req, res) => {

    const { name, instagram, followers, agency, description } = req.body

    Influ
        .create(req.body)
        .then(() => res.redirect('/influencer'))
        .catch(err => console.log(err))

})


//Editar influencer

router.get('/editar-influencer', (req, res) => {

    Influ
        .findById(req.query.id)
        .then(influInfo => res.render('influencers/edit-influ', influInfo))
        .catch(err => console.log(err))         
    
})

router.post('/editar-influencer', (req, res) => {

    const influId = req.query.id

    const { name, instagram, followers, agency, description } = req.body

    Influ
        .findByIdAndUpdate(influId, { name, instagram, followers, agency, description })
        .then(() => res.redirect('/influencer'))
        .catch(err => console.log(err))   
})


//Eliminar influencer

router.get('/eliminar-influencer', (req, res) => {


    const influId = req.query.id

    Influ
        .findByIdAndDelete(influId)
        .then(() => res.redirect('/influencer'))
        .catch(err => console.log(err))

})


//Detalle de cada influencer

router.get('/:id', (req, res) => {

    const influId = req.params.id
    
    Influ

        .findById(influId)
        .then(theInflu => res.render('influencers/details-influs', theInflu))
        .catch (err => console.log (err))
})




module.exports = router