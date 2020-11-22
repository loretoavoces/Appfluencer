let mapInstance

function initApp() {
    drawMap()
    getPlacesFromAPI()
}


function drawMap() {
    mapInstance = new google.maps.Map(
        document.querySelector('#agencyMap'),
        { center: { lat: 40.415933, lng: -3.705167 }, zoom: 14, styles: mapStyles.retro }
    )
}


function getPlacesFromAPI() {

    axios
        .get('/api/agency')
        .then(response => {
            console.log(response.data)
            drawMarkers(response.data)
        })
        .catch(err => console.log(err))
}


function drawMarkers(agency) {

    agency.forEach(elm => {

        let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }

        new google.maps.Marker({
            map: mapInstance,
            position,
            title: elm.name
        })
    })

    mapInstance.setCenter({ lat: places[1].location.coordinates[0], lng: places[1].location.coordinates[1] })
}