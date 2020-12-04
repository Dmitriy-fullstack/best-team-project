import FetchCity from './ApiService';
import debounce from 'lodash.debounce';
import './style.scss';


const refs = {
    input: document.querySelector('.search__input'),
    btnFavourite: document.querySelector('.search__favouriteCity'),
    favCitiesContainer: document.querySelector('.js-fav-cities')
}

let favouriteCities = [];

refs.input.addEventListener('input', debounce(onSearch, 1500));
refs.btnFavourite.addEventListener('click', onBtnFavouriteClick);


const newFetchCity = new FetchCity();

function onSearch(event) {

    event.preventDefault();
      
    newFetchCity.query = event.target.value;

    if (newFetchCity.query === '') {clearResult()};
      
    newFetchCity.getQuery()        
         .then(data => {
             const CityName = data;
             console.log(CityName.name);
             
         })
         .catch(error => {console.log(error), clearResult()})
       
      
}
function clearResult() {
    refs.input.value = '';
    
  }

function onBtnFavouriteClick(event) {    
    if (event) {          
        favouriteCities.push(refs.input.value); 
        refs.favCitiesContainer.textContent = favouriteCities;
        
   }
}


