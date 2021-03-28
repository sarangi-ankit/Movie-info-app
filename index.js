let searchBtn=document.querySelector(".searchbtn");
let apiKey="07aea31a3e1ffc7290e63849ba25083c";
let searchBar;
let container=document.querySelector(".display")
let url="https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>"
const imagePath="https://image.tmdb.org/t/p/w500"
searchBtn.addEventListener("click",()=>{
    searchBar=document.querySelector(".searchbar").value;
    display()
})

async function display(){
    const baseUrl=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchBar}`
    let response=await fetch(baseUrl)
    let data= await response.json()
    displayData(data.results)
    
}

function displayData(movies){
    let output="";
    movies.map(movie=>{
        output+=
        `
        <section class="poster">
            <img class="image" data-movie-id="${movie.id}" src="${imagePath+movie.poster_path}">
        </section>

        `
    });
    container.innerHTML=output
}

