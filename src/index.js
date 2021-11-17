import './css/styles.css';
import lodash from 'lodash.debounce';
import notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
// const BASE_URL = 'https://restcountries.com/v3.1/name/{peru}';

const refs = {
  searchBox: document.querySelector('#search-box'),
};

refs.searchBox.addEventListener('input', onSearch);

function onSearch() {
  const searchQuery = refs.searchBox.value;
  console.log(searchQuery);

  fetchCountries(searchQuery)
    .then(console.log(name))
    .catch(error => {
      console.log(error);
    });
}

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    return response.json();
  });
}
//uganda
