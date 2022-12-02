const movieFetch = fetch("http://localhost:3000/api/movies")

const monFilm = new URLSearchParams(window.location.search).get("id");