import './css/styles.css';
import lodash from 'lodash.debounce';
import notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const BASE_URL = 'https://restcountries.com/v3.1/name/{peru}';

const refs = {
  searchBox: document.querySelector('#search-box'),
};

refs.searchBox.addEventListener('input', () => {
  //   console.log(refs.searchBox.value);
  const searchQuery = refs.searchBox.value;
  console.log(searchQuery);
});

// fetchCountries(name)
//   .then(name)
//   .catch(error => {
//     console.log(error);
//   });

const options = {};

fetch(BASE_URL, options)
  .then(response => {
    return response.json();
  })
  .then(name => {
    console.log(name);
  })
  .catch(error => {
    console.log('error');
  });
