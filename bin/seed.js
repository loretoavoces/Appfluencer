// ////SEED USER

// const mongoose = require('mongoose')
// const User = require('../models/user.model')

// const bcrypt = require("bcryptjs")
// const bcryptSalt = 10

// const salt = bcrypt.genSaltSync(bcryptSalt)
// const password1 = "loreto"
// const hashPass1 = bcrypt.hashSync(password1, salt)


// const dbName = 'Appfluencer'
// mongoose.connect(`mongodb://localhost/${dbName}`)

// const user = [ 
//     {
//         username: "loretoavoces",
//         name: "Loreto",
//         password: hashPass1,
//         role: "ADMIN"
//     }

// ]


// User
//     .create(user)
//     .then(allUsersCreated => {
//         console.log(`Created ${allUsersCreated.length} users`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Hubo un error,', err))


////SEED INFLUENCERS

const mongoose = require('mongoose')
const Influ = require('../models/influ.model')

const dbName = 'Appfluencer'
mongoose.connect(`mongodb://localhost/${dbName}`)

const influ = [
    {
        name: "Dulceida",
        image: "https://www.timejust.es/wp-content/uploads/2019/10/dulceida-feature-5.jpg", 
        instagram: "https://www.instagram.com/dulceida/?hl=es",
        followers: "2.8m",
        agency: "In Management Agency",
        location: {
            type: "Point",
            coordinates: [40.447297, -3.669838]
        },
        description: "La badalonesa Aida Domenech es nuestra influencer más internacional. Con casi tres millones de seguidores en Instagram (2,8m) y algo más de dos en su canal de YouTube (2,2M), tiene marca propia de ropa (y perfumes, pintalabios o joyas) y hasta un festival de música a su nombre (con moda y gastronetas), el Dulceweekend, cuya quinta edición no pudo celebrarse por la pandemia. Ha escrito un libro (Dulceida. Guía de estilo, en Cúpula, colección del grupo Planeta) y tiene su propia agencia de representación de influencers. Y es abanderada de los derechos LGTBI"
    },

    {
        name: "María Pombo",
        image: "https://aws.glamour.es/prod/designs/v1/assets/original/656127.jpg", 
        instagram: "https://www.instagram.com/mariapombo/?hl=es",
        followers: "1.6m",
        agency: "Soy Olivia",
        description: "Lleva la comunicación en la sangre (su árbol genealógico está lleno de periodistas de renombre y escritores, como su tatarabuela Concha Espina) así que no es extraño que su crecimiento como influencer esté siendo exponencial. Además de apoyar marcas como Agatha Paris, Mango o Springfield, tiene sus propias firmas de ropa, Tipi Tent y Name The Brand, y ha organizado también el primer festival de reguetón de España, Suave Fest. Su simpatía y belleza natural son parte fundamental de su encanto."
    },

    {
        name: "Grace Villarreal",
        image: "https://arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/EBKVU4UA2BFL7DHXELDJIVWLXA.jpg", 
        instagram: "https://www.instagram.com/gracyvillarreal/?hl=es",
        followers: "619k",
        agency: "Soy Olivia", 

    },
    {
        name: "Marta Riumbau",
        image: "https://www.hola.com/imagenes/actualidad/2016091887995/entrevista-Marta-Riumbau-hola4u/0-388-918/martariumbau7-z.jpg", 
        instagram: "https://www.instagram.com/riumbaumarta/?hl=es",
        followers: "605k",
        agency: "Pop Cont", 
        description: "Marta es diplomada en la carrera de Empresariales, licenciada en Publicidad y Relaciones públicas y también cuenta con un máster relacionado con marketing y comunicación de moda. Precisamente, a raíz de este máster fundó en 2015 su propia marca de moda conocida como Mus&bombon colección. Además, durante el máster fue cuando debutó en Youtube. Siguiendo vídeos de otras chicas españolas y americanas le surgió la idea. A partir de entonces, Marta nunca ha dejado de subir vídeos a su canal. Se declara fan de Claire Marshall y nunca se pierde sus vídeos, aunque es consumidora de muchos otros canales."
    },
    {
        name: "Arantxa Cañadas",
        image: "https://www.arantxa-canadas.com/wp-content/uploads/2020/05/DSC07606-683x1024.jpg", 
        instagram: "https://www.instagram.com/riumbaumarta/?hl=es",
        followers: "165k",
        agency: "Soy Olivia", 
        description: "Arantxa es una chica 100% inspiradora. Además de subir videos a su canal de YouTube semanalmente e inspirar a cientos de personas con su contenido, Arantxa es diseñadora de moda y tiene su propia marca: Tulle Rouge."
    },
    {
        name: "Sara Baceiredo",
        image: "https://arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/7C5VD2UGJBCL3JOEYEX4OBXHLM.jpg", 
        instagram: "https://www.instagram.com/sarabace2/?hl=es",
        followers: "374k",
        agency: "Soy Olivia", 
        description: "Ser buen comunicador, crear contenidos que gusten al público y tener constancia en las redes sociales son tres de las características que definen a la 'influencer' sara baceiredo, una joven vitoriana que además acaba de sacar su propia línea de complementos: It's Lava."
    },
    {
        name: "Marta Lozano",
        image: "https://www.instyle.es/medio/2019/06/06/2019-05-23dior-cannes-marta-002-80072_b7626a1e_812x1082.jpg", 
        instagram: "https://www.instagram.com/martalozanop/?hl=es",
        followers: "878k",
        agency: "Espectalium", 
        description: "Valenciana de 1995, comenzó su carrera de modelo con 16 años, pero no tenía aspiraciones concretas en el ámbito de la moda. De hecho, comenzó a estudiar derecho… pero Instagram se cruzó en su camino y se ha convertido en referente de moda, colaborando con marcas como Bulgari, Missoni, Rat & Boa, Louis Vuitton, Carolina Herrera, Versace… o Desigual. Y ha ampliado su campo de acción protagonizando reportajes en revistas de las de toda la vida…"
    },
    {
        name: "Rocío Osorno",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rocio-osorno-elle-1605599411.jpg", 
        instagram: "https://www.instagram.com/rocio0sorno/?hl=es",
        followers: "1.3m",
        agency: "Go Talents", 
        description: "La influencer sevillana estudió ingeniería técnica agrícola. Terminó la carrera pero no ha ejercido, ya que después de su Erasmus en Francia comenzó a estudiar patronaje industrial y moda y comenzó a usar Instagram para mostrar sus diseños. En la actualidad es propietaria de la firma de moda que lleva su nombre y sus más de un millón de seguidoras la siguen para que les inspire con sus trajes de “invitada” de fiesta y noche o vestidos de novia (aunque también de ropa más informal), de la que ella es su principal modelo."
    },

    
]

Influ
    
    .create(influ)
    .then(allInflusCreated => {
        console.log(`Created ${allInflusCreated.length} influencers`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))

