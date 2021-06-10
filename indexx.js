function updateMap() {
  fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
      console.log(rsp.data);
      rsp.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;

        // Mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: rgb(255, 0, 0)
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

updateMap();
