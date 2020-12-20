// jshint esversion : 6
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// This url is a huge array of different cities and states. Go to the url to view data which is in json format.format


const cities = [];

// Now we want to fetch all data from url and put em in the cities array


fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));



function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');   //  gi - global case insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value,'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    const population = numberWithCommas(place.population);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
         <span class="polulation">${population}</span>
      </li>
    `;
  }).join('');   // join use kore array ke string e convert
  suggestions.innerHTML = html;

}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
