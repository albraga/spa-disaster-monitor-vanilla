const URL = 'https://api.reliefweb.int/v1/disasters?appname=omundoagora&profile=full&offset=0&limit=10&preset=latest'


function getAffectedCountries() {
  return fetch(URL).then(result => result.json()).then(data => {
    let affectedCountries = []
    for (let item of data.data) {
      affectedCountries.push(countries.find(country => country.iso3 === item.fields.country[0].iso3))
    }
    return affectedCountries
  })
}