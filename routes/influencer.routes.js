const express = require('express')
const router = express.Router()
const CDNupload = require('./../configs/cdn-upload.config')

const Influ = require('./../models/influ.model')
const User = require('./../models/user.model')
const Agency = require('./../models/agency.model')

//Passport
const ensureAuthenticated = (req, res, next) => req.isAuthenticated() ? next(): res.render('auth/login', {errorMsg: "Desautorizada, inicia sesión"})
const checkRole = admittedRoles => (req, res, next) => admittedRoles.includes(req.user.role) ? next() : res.render('auth/login', { errorMsg: 'Desautorizada, no tienes permisos' })

//Show all influencers
router.get('/', ensureAuthenticated, checkRole(['ADMIN', 'USER']), (req, res) => {

    Influ
        .find({}, {name: 2, image: 3})
        .then(allInflus => res.render('influencers/all-influs', {
            allInflus,
                user: req.user,
                isAdmin: req.user.role.includes('ADMIN'),
                isUser: req.user.role.includes('USER')}))
        .catch (err => console.log (err))
})

//New influencer get
router.get('/crear-influencer', (req, res) => {

    Agency
        .find()
        .then(allTheAgencies => res.render('influencers/new-influ', { allTheAgencies }))
        .catch(err => console.log(err))
  
})

//New influencer post
router.post('/crear', CDNupload.single('imageFile'), (req, res) => {

    const { name, instagram, followers, agency, description } = req.body

    const image = req.file.path
        
    Influ
        .create({ name, instagram, followers, description, image, agency } )
        .then(() => res.redirect('/influencer'))
        .catch(err => console.log(err))

})

//Edit influencer get
router.get('/editar-influencer', (req, res) => {

    const promiseInflu = Influ.findById(req.query.id).populate('agency')
    
    const promiseAgency = Agency.find()
        
    Promise.all([promiseInflu, promiseAgency])

        .then(results =>
            res.render('influencers/edit-influ', {influ: results [0], agencies: results [1]}))
        .catch(err => console.log(err))     
})

//Edit influencer post
router.post('/editar-influencer', (req, res) => {

    const influId = req.query.id

    const { name, instagram, followers, agency, description } = req.body

    Influ
        .findByIdAndUpdate(influId, { name, instagram, followers, description, agency_id: agency })
        .then(() => res.redirect('/influencer'))
        .catch(err => console.log(err))   
})

//Delete influencer
router.get('/eliminar-influencer', (req, res) => {


    const influId = req.query.id

    Influ
        .findByIdAndDelete(influId)
        .then(() => res.redirect('/influencer'))
        .catch(err => console.log(err))

})

//Detail influencer
router.get('/:id', (req, res) => {

    const influId = req.params.id
    
    Influ
        .findById(influId)
        .then(theInflu => res.render('influencers/details-influs', theInflu))
        .catch (err => console.log (err))
})

module.exports = router