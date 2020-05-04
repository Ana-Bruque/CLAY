function initMap(){

    var markers = [];

    var options = {
    zoom:11,
    center: {lat:51.5074, lng:-0.1278}
    }

    var map = new google.maps.Map(document.getElementById('studio-map-canvas'), options);

    list = [
      [51.50907, -0.14142], 
      [51.49118, -0.15244],
      [51.51506, -0.19736], 
      [51.52352, -0.1958],
      [51.55568, -0.17774]
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



