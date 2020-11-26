// //SEED USER

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
//     },

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
        logo: "https://static.wixstatic.com/media/8865d3_a33119642f064eabac27c4788227943d~mv2.png/v1/fit/w_2500,h_1330,al_c/8865d3_a33119642f064eabac27c4788227943d~mv2.png",
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


