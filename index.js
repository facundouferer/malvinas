let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -51.796253, lng: -59.523613 },
        zoom: 8,
    });
}