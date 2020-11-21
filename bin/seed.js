const mongoose = require('mongoose')
const Influ = require('../models/influ.model')

const dbName = 'Appfluencer'
mongoose.connect(`mongodb://localhost/${dbName}`)

const influ = [
    {
        name: "Dulceida",
        endpoint: "dulceida",
        image: "https://www.timejust.es/wp-content/uploads/2019/10/dulceida-feature-5.jpg", 
        instagram: "https://www.instagram.com/dulceida/?hl=es",
        followers: "2,8m",
        agency: "In Management Agency",
        description: "La badalonesa Aida Domenech es nuestra influencer más internacional. Con casi tres millones de seguidores en Instagram (2,8m) y algo más de dos en su canal de YouTube (2,2M), tiene marca propia de ropa (y perfumes, pintalabios o joyas) y hasta un festival de música a su nombre (con moda y gastronetas), el Dulceweekend, cuya quinta edición no pudo celebrarse por la pandemia. Ha escrito un libro (Dulceida. Guía de estilo, en Cúpula, colección del grupo Planeta) y tiene su propia agencia de representación de influencers. Y es abanderada de los derechos LGTBI"
    },

    {
        name: "Maria Pombo",
        endpoint: "maria-pombo",
        image: "https://aws.glamour.es/prod/designs/v1/assets/original/656127.jpg", 
        instagram: "https://www.instagram.com/mariapombo/?hl=es",
        followers: "1,6m",
        agency: "Soy Olivia",
        description: "Lleva la comunicación en la sangre (su árbol genealógico está lleno de periodistas de renombre y escritores, como su tatarabuela Concha Espina) así que no es extraño que su crecimiento como influencer esté siendo exponencial. Además de apoyar marcas como Agatha Paris, Mango o Springfield, tiene sus propias firmas de ropa, Tipi Tent y Name The Brand, y ha organizado también el primer festival de reguetón de España, Suave Fest. Su simpatía y belleza natural son parte fundamental de su encanto."
    },

    {
        name: "Grace Villarreal",
        endpoint: "grace-villarreal",
        image: "https://arc-photo-larazon.s3.amazonaws.com/eu-central-1-prod/public/EBKVU4UA2BFL7DHXELDJIVWLXA.jpg", 
        instagram: "https://www.instagram.com/gracyvillarreal/?hl=es",
        followers: "619K",
        agency: "Soy Olivia",
        description: "Grace se ha formado en Teología y Hermenéutica en UOFN en Los Ángeles, ha estudiado fotografía en la escuela privada EFTI en Madrid. Para ella, la familia y la cultura son valores fundamentales en la formación del carácter y han sido algo clave en su vida a lo largo de los años; gracias a ello ha viajado a más de 17 países y ha vivido en cuatro países diferentes. No se ha limitado solo a eso en su carrera personal sino que tiene vocación por la ayuda social y ha sido voluntaria durante más de 10 año en ONGs. Aparte de viajes misioneros al continente asiático y Sudamérica, es una persona autodidacta curiosa y creativa. Gracias a ello, para Grace el emprendimiento era la única opción posible a la hora de encarar el éxito. Empezó con su marca personal en 2012 creando una comunidad en YouTube, Happysunnyflowers, de más de 850.000 seguidores y se lanzó a Instagram poco después dónde actualmente cuenta con una comunidad de 610.000 personas y es embajadora de mas de 10 marcas lifestyle del mercado. Además en 2017 se lanzó al mundo de la hostelería con Pic & Nic con un restaurante de sándwich gourmet que está en plena expansión. En 2019 creó, junto a su hermana Melissa Villarreal, la marca de moda y complementos TheVillaConcept."
    }
]

Influ
    
    .create(influ)
    .then(allInflusCreated => {
        console.log(`Created ${allInflusCreated.length} influencers`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))

