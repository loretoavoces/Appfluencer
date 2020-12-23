let mapInstance

function initApp() {
    drawMap()
    getPlacesFromAPI()
}

function drawMap() {
    mapInstance = new google.maps.Map(
        document.querySelector('#agencyMap'),
        { center: { lat: 40.437776, lng: -3.684804 }, zoom: 13, styles: mapStyles.retro }
    )
}

function getPlacesFromAPI() {

    axios
        .get('/api/agency')
        .then(response => {
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
}