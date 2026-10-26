var google;

function init() {
    // 1. Replace these numbers with your venue's exact Latitude and Longitude
    var myLatlng = new google.maps.LatLng(9.1554, 76.7323);
    
    var mapOptions = {
        // Zoom level (14 is closer to street level, good for venues)
        zoom: 14, 
        center: myLatlng,
        scrollwheel: false,
        // The original template styles that match the website's color scheme
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    
    // 2. Place the custom marker directly at your venue
    new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png',
        title: 'Wedding Venue'
    });
}

google.maps.event.addDomListener(window, 'load', init);