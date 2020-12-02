export default class ApiService {
    constructor() {
        this.searchQuery = ''
        
    }

    getQuery (searchQuery) {
        
    const key = 'aa3a7ee5f1eef77c63293faf47999964';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.searchQuery}&appid=${key}`;

    return fetch(url)
        .then(resronce => resronce.json())
        .then(data => {
            return data            
        })
        .catch (error => console.log('idi v les'))
    }

    get query(){
        return this.searchQuery
    }
    set query(newQuery){
        return this.searchQuery = newQuery;
    }

        

}












