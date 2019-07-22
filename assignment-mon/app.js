
let movieList = document.getElementById("movieList")

let movieDetails = document.getElementById("movieDetails")

//get div from HTML
let moviesURL = 'http://www.omdbapi.com/?s=x-men&apikey=d42023ea'


function showDetails(id) {
    let detailsURL = `http://www.omdbapi.com/?i=${id}&apikey=d42023ea`
    let detailsReq = new XMLHttpRequest()
    detailsReq.open('GET', detailsURL)
    detailsReq.addEventListener('load', () => {
        let details = JSON.parse(event.currentTarget.responseText)
        //console.log(details)
            movieDetails.innerHTML =  `<div>Movie Title: ${details.Title}</div>
                                         <div>Year: ${details.Year}</div> 
                                         <div>Director: ${details.Director}</div> 
                                        <div>Release Date: ${details.Released}</div> 
                                        <div>Actors: ${details.Actors}</div>`
    })

        detailsReq.send()

    }



let req = new XMLHttpRequest()
req.open('GET', moviesURL)
req.addEventListener('load', () => {
    let movies = JSON.parse(event.currentTarget.responseText)
    let movieItems = movies.Search.map(movie => {
        return `<div>
                <h2>${movie.Title}</h2>
                <img src='${movie.Poster}' onClick="showDetails('${movie.imdbID}')">
                </div>`
    })
    movieList.innerHTML = movieItems.join('')



})

req.send()








