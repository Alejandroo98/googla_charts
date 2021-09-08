const objetValues = (paisesDB) => {
  let paises = [];

  for (let i = 0; i < paisesDB.length; i++) {
    const array = Object.values(paisesDB[i]);
    paises = [...paises, array];
  }
  return paises;
};

fetch('/paises', {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({}),
})
  .then((res) => res.json())
  .then((data) => {
    const paises = objetValues(data);

    google.charts.load('current', {
      packages: ['map'],
      mapsApiKey: 'AIzaSyAdiYO7nEr4WRJSykMy2hPPh_C83JDwAoA',
    });
    google.charts.setOnLoadCallback(drawMap);

    function drawMap() {
      var data = google.visualization.arrayToDataTable([['Country', 'Population'], ...paises]);

      var options = {
        showTooltip: true,
        showInfoWindow: true,
      };

      var map = new google.visualization.Map(document.getElementById('chart_div'));

      map.draw(data, options);
    }
  });
