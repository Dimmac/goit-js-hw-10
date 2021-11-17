import './css/styles.css';
import lodash from 'lodash.debounce';
import notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
// const BASE_URL = 'https://restcountries.com/v3.1/name/{peru}';

const refs = {
  searchBox: document.querySelector('#search-box'),
};

// refs.searchBox.addEventListener('input', onSearch);

// function onSearch() {
// function fetchCountries(name) {
//   // const options = {};
//   return fetch(`https://restcountries.com/v3.1/name/{name}`).then(response => {
//     return response.json();
//   });
// }
// }
// console.log(onSearch());

refs.searchBox.addEventListener('input', () => {
  const searchQuery = refs.searchBox.value;
  const name = searchQuery;
  console.log(searchQuery);
});

fetchCountries('peru')
  .then(console.log(name))
  .catch(error => {
    console.log(error);
  });

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    return response.json();
  });
}
