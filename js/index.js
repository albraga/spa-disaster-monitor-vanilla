
let mymap = L.map('mapid').setView([40, 15], 2);
const token = 'pk.eyJ1IjoiYWxicmFnYSIsImEiOiJja2dtazk0enkxMjdiMnlxcHBkNGFleHUwIn0.f5gS2r6rRIbYXLg3i-DP1Q'

getAffectedCountries().then(affectedCountries => {
  affectedCountries.forEach(item => {
    let marker = L.marker([item.lat, item.lon]).addTo(mymap)
    marker.bindPopup(`<b>${item.name}</b><br>...`).openPopup()
    let ul = document.getElementById('lista')
    let il = document.createElement('li')
    il.innerText = item.name
    ul.append(il)
  })
})

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`, {
  maxZoom: 2,
  minZoom: 2,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/outdoors-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(mymap);


