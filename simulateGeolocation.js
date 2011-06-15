function simulateGeolocation(){

  var offset = 1 / 200, // how far to move
    interval = 3 * 1000, // how log to wait between updates
    position = { // start location
      coords: { 
        latitude: 53.561253, // sample coords for Hamburg / Germany 
        longitude: 9.961445
      } 
    };
  
  // return a random offest
  function randomOffset(){
    return (Math.random() * offset) - offset / 2;
  }
  
  //update position
  function updatePosition(){
    position.coords.latitude += randomOffset();
    position.coords.longitude += randomOffset();
  }

  // override default geolocation API
  navigator.geolocation.getCurrentPosition = function(success){
    updatePosition();
    success(position);
  };

  navigator.geolocation.watchPosition = function(success){
    
    // call update after some seconds
    function delay(){
      setTimeout(update, Math.random() * interval);
    }
    
    // execute callback
    function update(){
      updatePosition();
      success(position);
      delay();
    }
    
    delay();
  };
}