async function onClickHandler(){
    event.preventDefault();
    const search = document.getElementById('movieName').value 
    let response =  await fetch(`https://www.omdbapi.com/?apikey=cb11d305&t=${search}`)
    const movie = await response.json();
    const movie_data = movie.Search
    console.log(movie);
    const movieDetails= document.getElementById('movieDetails').innerHTML= ` <img src=${movie.Poster} /> <pre> ${JSON.stringify(movie,undefined,4)} </pre>`;
    // const movieDetails= document.getElementById('movieDetails').innerHTML= movie.Search.map(movie=>` <img src=${movie.Poster} /> <pre> ${JSON.stringify(movie,undefined,4)} </pre>`);

}

document.getElementById('btn').addEventListener("click", onClickHandler);






// // MwoHaoj6wcr8zz5eZ285mjIKu7t2Q6NeO6OwvcFI 
// // https://api.watchmode.com/v1/search/?apiKey=MwoHaoj6wcr8zz5eZ285mjIKu7t2Q6NeO6OwvcFI&search_field=name&search_value=Ed%20Wood
