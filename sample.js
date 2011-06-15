function initialize() {
  var map, marker;

  map = new google.maps.Map(document.getElementById("map_canvas"), {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  marker = new google.maps.Marker({
    map: map
  });
  
  simulateGeolocation();
  
  navigator.geolocation.getCurrentPosition(function(position){
    var latLng = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    
    map.setCenter(latLng);
    
  });
  
  navigator.geolocation.watchPosition(function(position){
    var latLng = new google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    
    marker.setPosition(latLng);
  });
}