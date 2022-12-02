
let films = document.getElementById("films");
let series = document.getElementById("series");
//on initie des compteurs pour 
// la completion d'une série ou film
let completion = 0;
// la durée total de la vidéothèque
let dureeTotalVideotheque = 0;
//la durée vue de la vidéothèque
let dureeVueVideotheque = 0;
//le nombre de vidéo complétés à 100%
let videoCompletes = 0;
//un compteur i pour la boucle
let i = 0;
// boucle pour afficher chaque élément du tableau videotheque contenant les objets video


const movieFetch = fetch("http://localhost:3000/api/movies")

let videotheque = []

const afficherMovieFetch = movieFetch
    .then(function (reponse) {
        if (reponse.ok) {
            return reponse.json();
        }
    })
    .then(function (valeur) {
        valeur.forEach(video => {
            // D'abord un switch pour identifier si on a affaire à un film, une série ou autre chose et on retourne alors une erreur.
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
                <a class="text-right" href="fiche-video.html?id=${video.id}">Details</a>
             </div>

            `);
                    //on calcule le pourcentage d'episode vue et on l'envoi vers une barre de progression
                    completion = toPercent(video.nombreEpisodesVues, video.nombreEpisodesTotal);

                    dureeTotalVideotheque += dureeSerie(video.nombreEpisodesTotal, video.dureeEpisode);
                    dureeVueVideotheque += dureeSerie(video.nombreEpisodesVues, video.dureeEpisode);

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
                        <a class="text-right" href="fiche-video.html?id=${video.id}">Details</a>
                    </div>
                </div>
            </div>

            `);

                    dureeTotalVideotheque += video.dureeFilmTotal;
                    dureeVueVideotheque += video.dureeFilmVue;

                    break;

                // par défaut on renvoie un warning dans la console et on ne fait rien d'autre.
                default:
                    console.error("Cet objet n'est ni une série ni un film :", video)
            }

            let progression = document.getElementsByClassName('progression');

            //on vient ajouter des styles en fonction de la complétion
            switch (true) {
                //gestion erreurs
                case (progression[i] == null):
                    console.warn("On ignore l'élément précédent", video);
                    break;
                case (completion == 100):
                    progression[i].setAttribute("style", `width : ${completion}%; background-color: green`);
                    // on vient également compter le nombre de vidéo complétés à 100%
                    videoCompletes++;
                    break;
                case (completion >= 50 && completion < 100):
                    progression[i].setAttribute("style", `width : ${completion}%; background-color: orange`);
                    break;
                case (completion > 0 && completion < 50):
                    progression[i].setAttribute("style", `width : ${completion}%; background-color: red`);
                    break;
                default:
                    progression[i].setAttribute("style", `width : ${completion}%`);
            }

            //Incrémentation de notre compteur
            i++;

        });
        
        //affichage des statitistiques sur l'ensemble de la vidéothèque
        const stats = document.getElementById("stats");
        stats.insertAdjacentHTML("beforeend", `
            <p>Nombre total de séries et films complètement terminés : ${videoCompletes}/${i}</p>  
            <p>Temps total regardé : ${toHoursandMinutes(dureeVueVideotheque)}</p>
            <p>Temps total des vidéos : ${toHoursandMinutes(dureeTotalVideotheque)}</p>
            <p>Soit ${toPercent(dureeVueVideotheque,dureeTotalVideotheque)} % vue en tout</p>
        `)

    })
    .catch(function (err) {
        console.log(err);
    });







