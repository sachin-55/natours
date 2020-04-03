/*eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmloY2FzMTAxIiwiYSI6ImNrOGhia3MzejAzODAzZXBkdnhwZXpzcmcifQ.-S_UFVHlVmiwsmlX-eTGCA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nihcas101/ck8hbord00fww1ili0be4kf5y',
    //   center: [-118.113491, 34.111754],
    //   zoom: 10,
    //   interactive: false,
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: { top: 200, bottom: 50, left: 100, right: 100 },
  });
};
