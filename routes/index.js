module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./auth.routes.js'))
    app.use('/influencer/mapa', require('./agency.routes.js'))
    app.use('/influencer', require('./influencer.routes.js'))
    app.use('/api', require('./api.routes.js'))
}