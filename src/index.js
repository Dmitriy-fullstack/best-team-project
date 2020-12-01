import FetchCity from './ApiService';
import debounce from 'lodash.debounce';
import { data } from 'autoprefixer';


const refs = {
    input: document.querySelector('.header__input'),
    btnFavourite: document.querySelector('.header__favouriteCity')
}

// let favouriteCityes = [];

refs.input.addEventListener('input', debounce(onSearch, 1500));
// refs.btnFavourite.addEventListener('click', onBtnFavouriteClick());

const newFetchCity = new FetchCity();

function onSearch(event) {

    event.preventDefault();
      
    newFetchCity.query = event.target.value.trim();

    if (newFetchCity.query.length === 0) clearResult();
      
    newFetchCity.getQuery()        
         .then(data => {
             const CityName = data;
             console.log(CityName);
         })
         .catch(error => {console.log(error), clearResult()})
       
      
}
function clearResult() {
    refs.input.value = '';
    
  }

// function onBtnFavouriteClick() {
    
//  favouriteCityes.append();
//  console.log(favouriteCityes);
// }