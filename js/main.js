// on définit la classe video qui sert à definir une video à partir de quelques clefs (todo : pe ajouter des clefs ?)
class serie {
    constructor(titre, realisateurs, dureeEpisode, nombreEpisodesTotal, nombreEpisodesVues, genre, description, logo) {
        this.titre = titre;
        this.realisateurs = realisateurs;
        this.dureeEpisode = dureeEpisode;
        this.nombreEpisodesTotal = nombreEpisodesTotal;
        this.nombreEpisodesVues = nombreEpisodesVues;
        this.genre = genre;
        this.description = description;
        this.logo = logo;
    };
}

class film {
    constructor(titre, realisateurs, dureeFilmTotal, dureeFilmVue, genre, description, affiche) {
        this.titre = titre;
        this.realisateurs = realisateurs;
        this.dureeFilmTotal = dureeFilmTotal;
        this.dureeFilmVue = dureeFilmVue;
        this.genre = genre;
        this.description = description;
        this.affiche = affiche;
    };
}

// ici on crée une entrée pour chaque série manuellement (todo : une méthode d'ajout un peu plus automatique pe un formulaire ?)
let erased = new serie("ERASED", "Tomoshiko It" + "\u014D", 24, 12, 12, "Un thriller avec des élements fantastiques.", "Basé sur le manga de Kei Sanbe du même nom ERASED raconte l'histoire d'un homme de 29 ans Satoru Fujinuma qui se retrouve projeté dans le passé lorsqu'il est sur le point de mourir. Quand sa mère est assassiné devant lui il est envoyé dans le passé 18 ans en arrière et obtient l'oppotrtunité de sauver sa mère mais également des victimes de kidnappings qui se trouve être 3 amis d'enfance.", "img/erased.png");
// le \u014D est présent pour écrire un 014D long (systeme Hepburn de romanisation du japonais)

let breakingBad = new serie("Breaking Bad", "Vince Gilligan", 48, 62, 30, "Une comédie noire avec des élements de thriller d'histoire de gang et de drogue.", "Walter White est un professeur de chimie dans un lycée d'Albuquerque. Quand un jour on lui diagnostique un cancer, dont il ne peut pas payer le traitement, il décide de passer le temps qu'il lui reste à gagner beacoup d'argent pour mettre sa famille à l'abri. Il s'associe à un ancien élève devenu délinquant Jessie Pinkman pour commencer à produire et vendre de la méthamphétamine.", "img/breakingbad.png");

let rickEtMorty = new serie("Rick et Morty", "Dan Harmond et Justin Roiland", 22, 61, 51, "De la science-fiction avec beaucoup d'humour noir.", "Les aventures de Rick Sanchez, un scientifique cynique et extravagant, et de son petit-fils Morty Smith, adolescent facilement influencable.", "img/ricketmorty.png");

let sherlock = new serie("Sherlock", "Mark Gatiss et Steven Moffat", 90, 14, 12, "Mystère policier et résolutions de crimes.", "Série basé sur l'oeuvre de Sir Arthur Conan Doyle. Sherlock Holmes est un détective privé particulièrement brillant et le Docteur Watson est un médecin militaire. Ils aident Scotland Yard à résoudre les enquêtes les plus difficiles grâce au don d'observation et de déduction de Sherlock.", "img/sherlock.png");

let fmab = new serie("Fullmetal Alchemist Brotherood", "Yasuhiro Irie", 24, 64, 64, "Mystère militaire dans un univers uchronique avec des pays imaginaires et de nombreux élements fantastiques.", "Deux frères Edward et Alphonse Elric sont alchimistes, une science qui permet de transformer de la matière en respectant le principe de l'échange équivalent. Un jour suite à la mort traumatique de leur mère alors qu'ils sont encore enfants ils décident de braver l'interdit : tenter de ressusciter leur mère grâce à l'alchimie. L'échec de cette expérience prive edward d'un bras et une jambe et Alphonse de son corps entier, il sera contraint de vivre dans une armure vide.", "img/fmab.png");

let theWalkingDead = new serie("The Walking Dead", "Frank Darabont", 45, 177, 1, "Apocalypse zombie.", "L'histoire suit Rick Grimes, l'adjoint du shérif local, alors qu'il se réveille d'un coma de plusieurs semaines pour découvrir un monde ravagé par une épidémie de zombie. Aprés avoir retrouvé sa famille il devient rapidement le chef d'une bande de survivants. Ils devront faire face aux morts-vivants, au manque de ressources et aux autres survivants parfois mal intentionnés.", "img/thewalkingdead.png");

let lesAffranchis = new film("Les Affranchis", "Martin Scorcese", 145, 100, "Thriller avec histoire de gangsters", "Henry Hill, un citoyen américain d'origine italo-irlandaise, parle de son enfance à New York en 1955 et raconte : « Autant que je me souvienne, j'ai toujours rêvé d'être gangster ». Gamin, Henry est fasciné par le train de vie des truands de la mafia, notamment celui de la famille Lucchese, une équipe de maffieux qui évolue dans son quartier ouvrier de Brooklyn, alors majoritairement peuplé d'habitants d'origine italienne.Rêvant de leur ressembler, Henry décide d'embrasser une carrière de criminel. Il abandonne l'école et intègre l’équipe des mafieux de son quartier leur rendant de petits services. Mais le père d'Henry, qui connaît la véritable nature de la mafia, bat régulièrement son fils quand il apprend par des lettres de l'école qu'Henry ne va plus en classe. L'enfant est cependant aidé par les « Affranchis » (le surnom que les mafieux utilisent entre eux pour se désigner), qui interviennent en menaçant le postier du quartier et font par la même occasion interrompre la distribution des lettres de l'école.", "img/lesaffranchis.jpg");

let kimiNoNawa = new film("Kimi No Nawa", "Makoto Shinkai", 110, 110, "Vie ordinaire avec élements fantastiques", "Mitsuha, dix-sept ans, est lycéenne dans le petit village d’Itomori. Ayant perdu sa mère, elle vit avec sa petite sœur, Yotsuha, et sa grand-mère, Hitoha, son père ayant quitté le foyer pour devenir maire. Partageant son temps entre les études, ses amis, et son rôle de miko, dont le savoir lui est transmis par sa grand-mère, elle étouffe, et rêve d’une autre vie en tant que beau jeune homme à Tokyo. Taki, de son côté, est un lycéen tokyoïte timide et doué en dessin. Lorsqu’il ne traîne pas avec ses amis au lycée ou au café, il travaille dans un restaurant italien comme serveur, où il est amoureux d’une collègue plus âgée, Miki, sans avoir jamais osé se déclarer. Alors qu’une comète passe dans le ciel d’Itomori, leur destin va basculer lorsqu’ils se rendent compte qu’ils se retrouvent chacun dans le corps de l’autre à raison de deux ou trois jours par semaine.", "img/kiminonawa.jpg");

let laListeDeSchindler = new film("La Liste de Schindler", "Steven Spielberg", 195, 50, "Historique militaire", "À Cracovie, durant la Seconde Guerre mondiale, les soldats allemands forcent les juifs à être parqués dans le ghetto de Cracovie. Oskar Schindler, industriel allemand et membre du parti nazi. Ne pensant tout d'abord qu'à son profit, il corrompt des membres de la Wehrmacht et des officiers SS pour acquérir une usine de métal émaillé. Dès lors, pour l'aider dans la direction de son entreprise, il engage un comptable juif, Itzhak Stern. Celui-ci est par ailleurs un représentant local de la communauté juive et a des contacts parmi le marché noir et la communauté juive des affaires. Stern aide alors Schindler à trouver des financements pour lancer son entreprise. Schindler entretient des relations amicales avec les nazis, profite de sa fortune, de son statut de « Herr Direktor » et a Stern comme bras droit. Il emploie une main d'œuvre juive bon marché dans son usine. De son côté, Stern convainc Schindler d'engager le plus possible d'employés essentiels à l'effort de guerre allemand : ainsi, celui-ci les sauve de la déportation dans les camps de concentration ou d'une exécution sommaire.", "img/lalistedeschindler.jpg");

let noCountryForOldMen = new film("No Country for Old Men", "les frères Cohen", 122, 61, "Thriller avec des élements de Western", "Texas, 1980. Alors qu'il chasse près de la frontière du Mexique, Llewelyn Moss  découvre par hasard les cadavres d'une bande de trafiquants de drogue et une mallette contenant deux millions de dollars, dont il s'empare. Il se retrouve poursuivi par des complices des trafiquants mexicains et prend la fuite, tandis que sa femme Carla Jean se réfugie chez sa mère à Odessa...", "img/nocountryforoldmen.jpg");


// création d'un tableau videotheque pour contenir chaque objet video crée précedemment
let videotheque = [];

videotheque.push(erased);
videotheque.push(breakingBad);
videotheque.push(rickEtMorty);
videotheque.push(sherlock);
videotheque.push(fmab);
videotheque.push(theWalkingDead);
videotheque.push(lesAffranchis);
videotheque.push(kimiNoNawa);
videotheque.push(laListeDeSchindler);
videotheque.push(noCountryForOldMen);
//On ajoute un intrus pour vérifier qu'il est écarté.
videotheque.push("testing")
// ici on pourra ajouter chaque élement série crée en plus manuellement (todo : une méthode d'ajout un peu plus automatique)

let contenu = document.getElementById("contenu");
//on dclare un compteur i pour la boucle
let i = 0;
// boucle pour afficher chaque élément du tableau videotheque contenant les objets video
for (let video of videotheque) {

    // D'abord un switch pour identifier si on a affaire à un film, une série ou autre chose et on retourne alors une erreur.
    switch (true) {
        case video instanceof serie:
            //on effectue ces instructions si on a affaire à une série.

            contenu.insertAdjacentHTML("beforeend", `

            <div>
                <img src="${video.logo}" alt="le logo de ${video.titre}"></img>
                <ul>
                    <li>
                        <h2>${video.titre}</h2>
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
                <p class="duree-episode">Durée moyenne d'un épisode ${video.dureeEpisode} minutes.</p>
                <div>
                    <p>Episodes : </p>
                    <p>${video.nombreEpisodesVues} / ${video.nombreEpisodesTotal}</p>
                    <div class="barre-progression">
                        <div class="progression"></div>
                    </div>
                </div>
             </div>

            `);
            //on calcule le pourcentage d'pisode vue et onl'nevoie vers une barre de progression
            let completion = Math.round(video.nombreEpisodesVues / video.nombreEpisodesTotal * 100);
            let progression = document.getElementsByClassName('progression');
            let progressionStyle = window.getComputedStyle(progression[i]);
            //progressionStyle.setProperty("width",`${completion}%`);
            //progression[i].setAttribute("style", `width : ${completion}%`);

            //on vient ajouter des styles en fonction de la complétion de la série
            switch (true) {
                //si la série est finie
                case (completion == 100):
                    progression[i].setAttribute("style", `width : ${completion}%; background-color: green`);
                    break;
                case (completion > 50 && completion < 100):
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

            break;


        case video instanceof film:
            //on effectue ces instructions si on a affaire à un film.


            let completionFilm = Math.round(video.dureeFilmVue / video.dureeFilmTotal * 100)
            contenu.insertAdjacentHTML("beforeend", `
            
            <div>
                <img src="${video.affiche}" alt="le logo de ${video.affiche}"></img>
                <ul>
                    <li>
                        <h2>${video.titre}</h2>
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
                <p class="duree-film">${video.dureeFilmTotal} minutes.</p>
                <div>
                    <p>${completionFilm}%</p>
                    <div class="barre-progression">
                        <div class="progression"></div>
                    </div>
                </div>
            </div>

            `);
            break;

        // par défaut on renvoie un warning dans la console et on ne fait rien d'autre.
        default:
            console.warn("Cet objet n'est ni une série ni un film :", video)
    }
}





