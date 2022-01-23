import countries from '../countries.json'
const selectCountry = document.querySelector('#selectCountries')


    const data = countries.map(country =>{
        return `<option value="${country.countryCode}">${country.country}</option>`
        // console.log(country)
    }).join('');
    selectCountry.insertAdjacentHTML('beforeend',data)
   

