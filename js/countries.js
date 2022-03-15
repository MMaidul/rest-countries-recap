

const loadCountries = ()=> {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displaycountries(data))
}


const displaycountries = ( countries )=> {
    console.log(countries[0]);
    const allCountriesHTML =  countries.map(country => getCountriesHTML(country))
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');

}


const getCountriesHTML = country => {
    return `
    <div class="country">
    <img src ="${country.flags.png}" />
    <h2>${country.name.common}</h2>
    </div>
    `
}
loadCountries();