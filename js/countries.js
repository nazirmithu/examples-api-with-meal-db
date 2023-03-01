const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('all-countries');
    // console.log(countries)
    // for(const country of countries){
    //     console.log(country)
    // }
    countries.forEach(country => {
        console.log(country.cca2)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick ="loadCountryDetails('${country.cca2}')">Details</button>
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('button add',code)
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetail(data[0]))
}

const showCountryDetail = country => {
    // console.log(country)
    const detailContainer = document.getElementById('country-details');
    detailContainer.innerHTML = `
    <h2>Country Details</h2>
        <h2>altSpellings: ${country.name.altSpellings ? country.name.altSpellings[1] : 'No altSpellings' } </h2>
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital[0]}</p>
        <img src="${country.flags.png}" alt="">
    `;
}

loadCountries();