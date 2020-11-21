////SEED USER

const mongoose = require('mongoose')
const User = require('../models/user.model')

const bcrypt = require("bcryptjs")
const bcryptSalt = 10

const salt = bcrypt.genSaltSync(bcryptSalt)
const password = "password"
const hashPass = bcrypt.hashSync(password, salt)


const dbName = 'Appfluencer'
mongoose.connect(`mongodb://localhost/${dbName}`)

const user = [ 
    {
        username: "loretoavoces",
        name: "Loreto",
        password: "loreto",
        role: "ADMIN"

    },
    {
        username: "saraloka",
        name: "Sara",
        password: "sara",
        role: "USER"
    }
]


User
    .create(user)
    .then(allUsersCreated => {
        console.log(`Created ${allUsersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))





////SEED INFLUENCERS

// const mongoose = require('mongoose')
// const Influ = require('../models/influ.model')

// const dbName = 'Appfluencer'
// mongoose.connect(`mongodb://localhost/${dbName}`)

// const influ = [
//     {
//         name: "Dulceida",
//         image: "https://www.timejust.es/wp-content/uploads/2019/10/dulceida-feature-5.jpg", 
//         instagram: "https://www.instagram.com/dulceida/?hl=es",
//         followers: "2,8m",
//         agency: "In Management Agency",
//         description: "La badalonesa Aida Domenech es nuestra influencer más internacional. Con casi tres millones de seguidores en Instagram (2,8m) y algo más de dos en su canal de YouTube (2,2M), tiene marca propia de ropa (y perfumes, pintalabios o joyas) y hasta un festival de música a su nombre (con moda y gastronetas), el Dulceweekend, cuya quinta edición no pudo celebrarse por la pandemia. Ha escrito un libro (Dulceida. Guía de estilo, en Cúpula, colección del grupo Planeta) y tiene su propia agencia de representación de influencers. Y es abanderada de los derechos LGTBI"
//     },

//     {
//         name: "Maria Pombo",
//         image: "https://aws.glamour.es/prod/designs/v1/assets/original/656127.jpg", 
//         instagram: "https://www.instagram.com/mariapombo/?hl=es",
//         followers: "1,6m",
//         agency: "Soy Olivia",
//         description: "Lleva la comunicación en la sangre (su árbol genealógico está lleno de periodistas de renombre y escritores, como su tatarabuela Concha Espina) así que no es extraño que su crecimiento como influencer esté siendo exponencial. Además de apoyar marcas como Agatha Paris, Mango o Springfield, tiene sus propias firmas de ropa, Tipi Tent y Name The Brand, y ha organizado también el primer festival de reguetón de España, Suave Fest. Su simpatía y belleza natural son parte fundamental de su encanto."
//     },

//     {
//         name: "Grace Villarreal",
//         image: "https://arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/EBKVU4UA2BFL7DHXELDJIVWLXA.jpg", 
//         instagram: "https://www.instagram.com/gracyvillarreal/?hl=es",
//         followers: "619K",
//         agency: "Soy Olivia", 
// }
// ]

// Influ
    
//     .create(influ)
//     .then(allInflusCreated => {
//         console.log(`Created ${allInflusCreated.length} influencers`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Hubo un error,', err))

