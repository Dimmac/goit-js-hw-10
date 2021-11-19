import './css/styles.css';
// import lodash from 'lodash.debounce';
import notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchBox: document.querySelector('#search-box'),
  countryInfo: document.querySelector('.country-info'),
};

refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
  const searchQuery = refs.searchBox.value;
  console.log(searchQuery);
  const options = {};
  fetchCountries(searchQuery, options)
    .then(name => renderCountryList(name))
    .catch(error => console.log(error));
}

// function onFetchError() {
//   alert('we have problems');
// }
// function onFetchDone() {
//   alert('THEN IS DONE!');
// }
//uganda

function renderCountryList(name) {
  if (name.length > 10) {
    return notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  }
  const markup = name
    .map(user => {
      return `<li>
          <p><b></b>${user.flags.svg}</p>
          <p><b></b>${user.name.official}</p>
        </li>`;
    })
    .join('');
  refs.countryInfo.innerHTML = markup;
  console.log(name.length);
}
