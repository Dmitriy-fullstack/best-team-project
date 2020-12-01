
import './style.scss';
import NewApiService from "./ApiService";
import galleryTpl from './templates/gallery.hbs';



const refs = {
searchForm: document.querySelector('.search-form'),
gallery: document.querySelector('.gallery'),
loadMoreBtn: document.querySelector('.loadMore__btn'),
   
} 

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

const newApiService = new NewApiService();

btnIsHiddenAdd ();
 
function onSearch (event) {
  
  event.preventDefault();
  newApiService.query = event.currentTarget.elements.query.value;
  clearCard();
  newApiService.resetPage();
  newApiService.getQuery().then(renderCard);
  btnIsHiddenRemove();
 
}

function onLoadMore() {
  newApiService.getQuery().then(renderCard);
  onScroll();
}

function btnIsHiddenAdd () {
  refs.loadMoreBtn.classList.add('is-hidden')
}
function btnIsHiddenRemove() {
  refs.loadMoreBtn.classList.remove('is-hidden')
}

function renderCard (hits) {
  refs.gallery.insertAdjacentHTML('beforeend', galleryTpl(hits));
}

function clearCard () {
  refs.gallery.innerHTML = '';
}
function onScroll() {
  let height = document.body.scrollHeight - 400;
  setTimeout(() => {
   window.scrollTo({
     top: height,
     left: 0,
     behavior: 'smooth',
   });
 }, 100);
}
