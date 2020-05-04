function initMap(){

    var markers = [];

    var options = {
    zoom:11,
    center: {lat:51.5074, lng:-0.1278}
    }

    var map = new google.maps.Map(document.getElementById('studio-map-canvas'), options);

    list = [
      [51.53053, -0.06082], 
      [51.47074, -0.06765],
      [51.53445, -0.07558], 
      [51.54154, -0.05652]
    ];

    var bounds = new google.maps.LatLngBounds();
    list.forEach(function (data, index, array) {

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(list[index][0], list[index][1], list[index][2], list[index][3]),
        map: map
      });
      
      markers.push(marker);

      bounds.extend(marker.position);
    });

  map.fitBounds(bounds);
    
  stopBounce = function(index) {
    markers[index].setAnimation(null);
  };
  showme = function(index) {
    if (markers[index].getAnimation() != google.maps.Animation.BOUNCE) {
        markers[index].setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(stopBounce, 1500, index);
    } else {
        stopBounce(index);
    }
  }

};
document.addEventListener('DOMContentLoaded', initMap());




