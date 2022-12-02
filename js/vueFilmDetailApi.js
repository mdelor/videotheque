const monFilm = new URLSearchParams(window.location.search).get("id");

const urlFetch = `http://localhost:3000/api/movies/${monFilm}`;

const movieFetch = fetch(urlFetch);
let films = document.getElementById("films");
let series = document.getElementById("series");

movieFetch
    .then(function (reponse) {
        if (reponse.ok) {
            return reponse.json();
        }
    })

    .then(function (video) {
        switch (true) {
            case video.isSeries == true:
                //on effectue ces instructions si on a affaire à une série.

                series.insertAdjacentHTML("beforeend", `

        <div>
            <img src="${video.imageUrl}" alt="le imageUrl de ${video.titre}"></img>
            <ul>
                <li>
                    <h3>${video.titre}</h3>
                </li>
                <li>
                    <h3>Réalisé par : </h3>
                    <p>${video.realisateur}</p>
                </li>
                <li>
                    <h3>Genre : </h3>
                    <p>${video.genre}</p>
                </li>
                <li>
                    <h3>Synopsis : </h3>
                    <p>${video.description}</p>
                </li>
            </ul>
            <p class="duree-episode">Durée moyenne d'un épisode ${video.dureeEpisode} minutes.</p>
            <div>
                <p>Episodes : </p>
                <p>${video.nombreEpisodesVues} / ${video.nombreEpisodesTotal}</p>
                <div class="barre-progression">
                    <div class="progression"></div>
                </div>
            </div>
            <a class="text-right" href="index.html">Retour Accueil</a>
         </div>

        `);
                //on calcule le pourcentage d'episode vue et on l'envoi vers une barre de progression
                completion = toPercent(video.nombreEpisodesVues, video.nombreEpisodesTotal);

                break;

            case video.isSeries == false:
                //on effectue ces instructions si on a affaire à un film.

                completion = toPercent(video.dureeFilmVue, video.dureeFilmTotal);
                films.insertAdjacentHTML("beforeend", `
        
            <div>
                <img src="${video.imageUrl}" alt="le imageUrl de ${video.imageUrl}"></img>
                <div>
                    <ul>
                        <li>
                            <h3>${video.titre}</h3>
                        </li>
                        <li>
                            <h3>Réalisé par : </h3>
                            <p>${video.realisateurs}</p>
                        </li>
                        <li>
                            <h3>Genre : </h3>
                            <p>${video.genre}</p>
                        </li>
                        <li>
                            <h3>Synopsis : </h3>
                            <p>${video.description}</p>
                        </li>
                    </ul>
                    <p class="duree-film">${toHoursandMinutes(video.dureeFilmTotal)}</p>
                    <div>
                        <p>${completion}%</p>
                        <div class="barre-progression">
                            <div class="progression"></div>
                    </div>
                    <a class="text-right" href="index.html">Retour Accueil</a>
                </div>
            </div>
        </div>

        `);

        };
        let progression = document.getElementsByClassName('progression');

        //on vient ajouter des styles en fonction de la complétion
        switch (true) {
            //gestion erreurs
            case (progression[0] == null):
                console.warn("On ignore l'élément précédent", video);
                break;
            case (completion == 100):
                progression[0].setAttribute("style", `width : ${completion}%; background-color: green`);
                // on vient également compter le nombre de vidéo complétés à 100%
                videoCompletes++;
                break;
            case (completion >= 50 && completion < 100):
                progression[0].setAttribute("style", `width : ${completion}%; background-color: orange`);
                break;
            case (completion > 0 && completion < 50):
                progression[0].setAttribute("style", `width : ${completion}%; background-color: red`);
                break;
            default:
                progression[0].setAttribute("style", `width : ${completion}%`);
        };


    })

    .catch(function (err) {
        console.error(err);
    });