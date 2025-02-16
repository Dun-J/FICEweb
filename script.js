let map;
let markers = [];

function initMap() {
    // Initialize the map
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
        zoom: 12
    });

    // Load existing pins from a server or local storage
    loadPins();

    // Add a click listener to place a new pin
    map.addListener('click', (event) => {
        addPin(event.latLng);
    });
}

function addPin(location) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true
    });

    markers.push(marker);

    // Save the pin to a server or local storage
    savePin(location);
}

function savePin(location) {
    // Here you would send the pin data to a server or save it locally
    console.log('Pin saved at:', location.lat(), location.lng());
}

function loadPins() {
    // Here you would fetch the pins from a server or local storage
    const savedPins = [
        { lat: 37.7749, lng: -122.4194 },
        { lat: 37.7849, lng: -122.4294 }
    ];

    savedPins.forEach(pin => {
        addPin(new google.maps.LatLng(pin.lat, pin.lng));
    });
}