// // ////SEED USER

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




////SEED INFLUENCERS + AGENCIAS POPULADAS

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
        description: "La badalonesa Aida Domenech es nuestra influencer más internacional. Con casi tres millones de seguidores en Instagram (2,8m) y algo más de dos en su canal de YouTube (2,2M), tiene marca propia de ropa (y perfumes, pintalabios o joyas) y hasta un festival de música a su nombre (con moda y gastronetas), el Dulceweekend, cuya quinta edición no pudo celebrarse por la pandemia. Ha escrito un libro (Dulceida. Guía de estilo, en Cúpula, colección del grupo Planeta) y tiene su propia agencia de representación de influencers. Y es abanderada de los derechos LGTBI"
    },

    {
        name: "María Pombo",
        image: "https://aws.glamour.es/prod/designs/v1/assets/original/656127.jpg", 
        instagram: "https://www.instagram.com/mariapombo/?hl=es",
        followers: "1.6m",
        description: "Lleva la comunicación en la sangre (su árbol genealógico está lleno de periodistas de renombre y escritores, como su tatarabuela Concha Espina) así que no es extraño que su crecimiento como influencer esté siendo exponencial. Además de apoyar marcas como Agatha Paris, Mango o Springfield, tiene sus propias firmas de ropa, Tipi Tent y Name The Brand, y ha organizado también el primer festival de reguetón de España, Suave Fest. Su simpatía y belleza natural son parte fundamental de su encanto."
    },

    {
        name: "Grace Villarreal",
        image: "https://arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/EBKVU4UA2BFL7DHXELDJIVWLXA.jpg", 
        instagram: "https://www.instagram.com/gracyvillarreal/?hl=es",
        followers: "619k",
        description: "Grace se ha formado en Teología y Hermenéutica en UOFN en Los Ángeles, ha estudiado fotografía en la escuela privada EFTI en Madrid. Para ella, la familia y la cultura son valores fundamentales en la formación del carácter y han sido algo clave en su vida a lo largo de los años; gracias a ello ha viajado a más de 17 países y ha vivido en cuatro países diferentes. No se ha limitado solo a eso en su carrera personal sino que tiene vocación por la ayuda social y ha sido voluntaria durante más de 10 año en ONGs. Aparte de viajes misioneros al continente asiático y Sudamérica, es una persona autodidacta curiosa y creativa. Gracias a ello, para Grace el emprendimiento era la única opción posible a la hora de encarar el éxito. Empezó con su marca personal en 2012 creando una comunidad en YouTube, Happysunnyflowers, de más de 850.000 seguidores y se lanzó a Instagram poco después dónde actualmente cuenta con una comunidad de 610.000 personas y es embajadora de mas de 10 marcas lifestyle del mercado. Además en 2017 se lanzó al mundo de la hostelería con Pic & Nic con un restaurante de sándwich gourmet que está en plena expansión. En 2019 creó, junto a su hermana Melissa Villarreal, la marca de moda y complementos TheVillaConcept."

    },
    {
        name: "Marta Riumbau",
        image: "https://www.hola.com/imagenes/actualidad/2016091887995/entrevista-Marta-Riumbau-hola4u/0-388-918/martariumbau7-z.jpg", 
        instagram: "https://www.instagram.com/riumbaumarta/?hl=es",
        followers: "605k",
        description: "Marta es diplomada en la carrera de Empresariales, licenciada en Publicidad y Relaciones públicas y también cuenta con un máster relacionado con marketing y comunicación de moda. Precisamente, a raíz de este máster fundó en 2015 su propia marca de moda conocida como Mus&bombon colección. Además, durante el máster fue cuando debutó en Youtube. Siguiendo vídeos de otras chicas españolas y americanas le surgió la idea. A partir de entonces, Marta nunca ha dejado de subir vídeos a su canal. Se declara fan de Claire Marshall y nunca se pierde sus vídeos, aunque es consumidora de muchos otros canales."
    },
    {
        name: "Arantxa Cañadas",
        image: "https://www.arantxa-canadas.com/wp-content/uploads/2020/05/DSC07606-683x1024.jpg", 
        instagram: "https://www.instagram.com/riumbaumarta/?hl=es",
        followers: "165k",
        description: "Arantxa es una chica 100% inspiradora. Además de subir videos a su canal de YouTube semanalmente e inspirar a cientos de personas con su contenido, Arantxa es diseñadora de moda y tiene su propia marca: Tulle Rouge."
    },
    {
        name: "Sara Baceiredo",
        image: "https://arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/7C5VD2UGJBCL3JOEYEX4OBXHLM.jpg", 
        instagram: "https://www.instagram.com/sarabace2/?hl=es",
        followers: "374k",
        description: "Ser buen comunicador, crear contenidos que gusten al público y tener constancia en las redes sociales son tres de las características que definen a la 'influencer' sara baceiredo, una joven vitoriana que además acaba de sacar su propia línea de complementos: It's Lava."
    },
    {
        name: "Marta Lozano",
        image: "https://www.instyle.es/medio/2019/06/06/2019-05-23dior-cannes-marta-002-80072_b7626a1e_812x1082.jpg", 
        instagram: "https://www.instagram.com/martalozanop/?hl=es",
        followers: "878k",
        description: "Valenciana de 1995, comenzó su carrera de modelo con 16 años, pero no tenía aspiraciones concretas en el ámbito de la moda. De hecho, comenzó a estudiar derecho… pero Instagram se cruzó en su camino y se ha convertido en referente de moda, colaborando con marcas como Bulgari, Missoni, Rat & Boa, Louis Vuitton, Carolina Herrera, Versace… o Desigual. Y ha ampliado su campo de acción protagonizando reportajes en revistas de las de toda la vida…"
    },
    {
        name: "Rocío Osorno",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rocio-osorno-elle-1605599411.jpg", 
        instagram: "https://www.instagram.com/rocio0sorno/?hl=es",
        followers: "1.3m",
        description: "La influencer sevillana estudió ingeniería técnica agrícola. Terminó la carrera pero no ha ejercido, ya que después de su Erasmus en Francia comenzó a estudiar patronaje industrial y moda y comenzó a usar Instagram para mostrar sus diseños. En la actualidad es propietaria de la firma de moda que lleva su nombre y sus más de un millón de seguidoras la siguen para que les inspire con sus trajes de “invitada” de fiesta y noche o vestidos de novia (aunque también de ropa más informal), de la que ella es su principal modelo."
    },
    {
        name: "Mery Turiel",
        image: "https://img3.stilo.es/fb/2c/87/mery_turiel-650x810.jpg", 
        instagram: "https://www.instagram.com/meryturiel/?hl=es",
        followers: "885k",
        description: "La influencer María Turiel se ha convertido en un referente de estilo y creadora de tendencias capaz de aumentar la venta de productos y fortalecer las campañas de moda cuando salen a la calle. Lleva a sus espaldas centenas de seguidores en Instagram, la red social más top del momento y con vistas a crecer juntas a medida que pase el tiempo. Mery Turiel ha creado estilo propio y ha hecho de la moda una forma de vida donde la moda lo es todo. Quizás con esta frase pienses que es algo artificial pero si te paras a escucharla, cambias de opinión."
    },
    {
        name: "María Frubies",
        image: "https://fashion.hola.com/imagenes/belleza/2020040269318/maria-fernandez-rubies-trucos-pelo-brillante/0-299-974/maria-frubies-rosa-a.jpg", 
        instagram: "https://www.instagram.com/mariafrubies/?hl=es",
        followers: "660k",
        description: "La madrileña descubrió Instagram en el curso académico 2013-2014, durante su ERASMUS en la ciudad sueca de Linköpings, para compartir con sus amigos españoles los sitios que visitaba y las comidas tan distintas que probaba. Licenciada en ADE bilingüe por CUNEF y máster en gestión de empresas de moda y lujo por el Istituto Marangoni de Milán, ha sido gerente de relaciones públicas en la agencia de representación de influencers Soy Olivia, pero en la actualidad se dedica en cuerpo y alma a su perfil personal. Es embajadora de Estée Lauder y ha colaborado en la campaña de lanzamiento del nuevo Mercedes-Benz GLA."
    },
        {
        name: "Amarna Miller",
        image: "https://www.wag1mag.com/wp-content/uploads/Amarna-Miller-Jedet-wag1mag-4.jpg", 
        instagram: "https://www.instagram.com/amarnamiller/?hl=es",
        followers: "316k",
        description: "Creadora de contenido, autora, activista, y actriz, Amarna estudió Bellas Artes especializada en fotografía y videoarte a camino entre Madrid y Santa Fe (Nuevo México). Desde pequeña ha vivido inmersa en una burbuja creativa que le ha ayudado a expresarse a través de su propio cuerpo, la escritura y el arte."
    },
    {
        name: "Irina Isasia",
        image: "https://i.pinimg.com/originals/be/83/b2/be83b2ccff104ec993b8cbf08b260938.jpg", 
        instagram: "https://www.instagram.com/irimatic/",
        followers: "588k",
        description: "Mezcla de muchas cosas sin relación alguna entre sí. De pequeña quería ser directora de cine, arqueóloga y reportera de National Geographic. Quería ser Indiana Jones, básicamente. Su pasión es la montaña, el campo, ir de acampada, montar a caballo, esquiar y los deportes de aventura. En su tiempo libre puede estar tocando el piano y escuchando a Silvio Rodríguez o viendo Star Trek y jugando a videojuegos."
    },
]



//SEED AGENCIAS 

// const mongoose = require('mongoose')
const Agency = require('../models/agency.model')

// const dbName = 'Appfluencer'
// mongoose.connect(`mongodb://localhost/${dbName}`)

const agency = [
    {
        name: "In Management Agency",
        logo: "https://media-exp1.licdn.com/dms/image/C510BAQHEytW5p_LLVw/company-logo_200_200/0?e=2159024400&v=beta&t=sDxBGGycds3qdiBRPNvyedwNTIpXrc2oDaXy--NGbCw",
        location: {
            type: "Point",
            coordinates: [41.447532, 2.249810]
        },
        street: "Carrer de Santa Anna, 11, 08911 Badalona, Barcelona",
        influencer: []
    },
    {
        name: "Soy Olivia",
        logo: "https://media.licdn.com/dms/image/C560BAQERV69RHPiKyQ/company-logo_200_200/0?e=2159024400&v=beta&t=nBg8RPNYL1u07ns5_QS412NIU0RD-tq5SMTxWakVkR0",
        location: {
            type: "Point",
            coordinates: [40.447297, -3.669838]
        },
        street: "Calle de López de Hoyos, 135, 28002 Madrid",
        influencer: []
    },
    {
        name: "Pop Cont",
        logo: "https://media.licdn.com/dms/image/C560BAQERV69RHPiKyQ/company-logo_200_200/0?e=2159024400&v=beta&t=nBg8RPNYL1u07ns5_QS412NIU0RD-tq5SMTxWakVkR0",
        logo: "data:image/png;base64,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",
        location: {
            type: "Point",
            coordinates: [40.422370, -3.708689]
        },
        street: "Calle Gran Via 64 4º1ª, 28004, Madrid",
        influencer: []
    },
    {
        name: "Go Talents",
        logo: "https://media-exp1.licdn.com/dms/image/C560BAQEWj5T6Byjh8Q/company-logo_200_200/0?e=2159024400&v=beta&t=5_OjDbrzGAhle6nKCtjptPwCJowNoYlS1h90r2igit8",
        location: {
            type: "Point",
            coordinates: [40.453666, -3.680641]
        },
        street: "Calle Talavera 4, 28016, Madrid",
        influencer: []
    },
    {
        name: "Espectalium",
        logo: "https://careers.talentclue.com/system/files/espectalium_logo.jpg",
        location: {
            type: "Point",
            coordinates: [41.396307, 2.151293]
        },
        street: "Carrer de Tuset, 19, 1º4ª, 08006 Barcelona",
        influencer: []
    },
    {
        name: "Miranda Talents",
        logo: "data:image/png;base64,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",
        location: {
            type: "Point",
            coordinates: [40.437776, -3.684804]
        },
        street: "María de Molina 26, 28006, Madrid",
        influencer: []
    },
]

Agency
    
    .create(agency)
    .then(allAgenciesCreated => {
        const influToCreate = []

        influ.forEach(elm => {
            influToCreate.unshift(elm)
            influToCreate[0].agency = allAgenciesCreated[Math.round(Math.random() * (allAgenciesCreated.length - 1))]._id
        })
        return Influ
            .create(influToCreate)
    })
    .then(allInfluCreated => {
        let promises = []

        allInfluCreated.forEach(elm => {
            promises.push(Agency.findByIdAndUpdate(elm.agency, {$push: {influencer: elm._id}}))
        })
        return Promise.all(promises)
    })
    .then(() => {
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))


