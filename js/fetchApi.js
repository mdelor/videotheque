const movieFetch = fetch("http://localhost:3000/api/movies")

const afficherMovieFetch = movieFetch
    .then(function (reponse) {
        if (reponse.ok) {
            return reponse.json();
        }
    })
    .then(function(valeur) {
        console.log(valeur);
    })
    .catch(function(err) {
        console.log(err);
    });