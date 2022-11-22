class series {
    constructor(titre, realisateurs, dureeEpisode, nombreEpisodesTotal, nombreEpisodesVues, genre, description) {
        this.titre = titre;
        this.realisateurs = realisateurs;
        this.dureeEpisode = dureeEpisode;
        this.nombreEpisodesTotal = nombreEpisodesTotal;
        this.nombreEpisodesVues = nombreEpisodesVues;
        this.genre = genre;
        this.description = description;
    }
}

let erased = new series("ERASED", "Tomoshiko It" + "\u014D", 24, 12, 12, "Un thriller avec des élements fantastiques.", "Basé sur le manga de Kei Sanbe du même nom ERASED raconte l'histoire d'un homme de 29 ans Satoru Fujinuma qui se retrouve projeté dans le passé lorsqu'il est sur le point de mourir. Quand sa mère est assassiné devant lui il est envoyé dans le passé 18 ans en arrière et obtient l'oppotrtunité de sauver sa mère mais également des victimes de kidnappings qui se trouve être 3 amis d'enfance.");

let breakingBad = new series("Breaking Bad", "Vince Gilligan", 48, 62, 30, "Une comédie noire avec des élements de thriller d'histoire de gang et de drogue.", "Walter White est un professeur de chimie dans un lycée d'Albuquerque. Quand un jour on lui diagnostique un cancer, dont il ne peut pas payer le traitement, il décide de passer le temps qu'il lui reste à gagner beacoup d'argent pour mettre sa famille à l'abri. Il s'associe à un ancien élève devenu délinquant Jessie Pinkman pour commencer à produire et vendre de la méthamphétamine.");

let rickEtMorty = new series("Rick et Morty", "Dan Harmond et Justin Roiland", 22, 61, 51, "De la science-fiction avec beaucoup d'humour noir.", "Les aventures de Rick Sanchez, un scientifique cynique et extravagant, et de son petit-fils Morty Smith, adolescent facilement influencable.");

let sherlock = new series("Sherlock", "Mark Gatiss et Steven Moffat", 90, 14, 12, "Mystère policier et résolutions de crimes.", "Série basé sur l'oeuvre de Sir Arthur Conan Doyle. Sherlock Holmes est un détective privé particulièrement brillant et le Docteur Watson est un médecin militaire. Ils aident Scotland Yard à résoudre les enquêtes les plus difficiles grâce au don d'observation et de déduction de Sherlock.");

let fmab = new series("Fullmetal Alchemist Brotherood", "Yasuhiro Irie", 24, 64, 64, "Mystère militaire dans un univers uchronique avec des pays imaginaires et de nombreux élements fantastiques.", "Deux frères Edward et Alphonse Elric sont alchimistes, une science qui permet de transformer de la matière en respectant le principe de l'échange équivalent. Un jour suite à la mort traumatique de leur mère alors qu'ils sont encore enfants ils décident de braver l'interdit : tenter de ressusciter leur mère grâce à l'alchimie. L'échec de cette expérience prive edward d'un bras et une jambe et Alphonse de son corps entier, il sera contraint de vivre dans une armure vide.")

let thewalkingdead = new series("The Walking Dead", "Frank Darabont", 45, 177, 1, "Apocalypse zombie.", "L'histoire suit Rick Grimes, l'adjoint du shérif local, alors qu'il se réveille d'un coma de plusieurs semaines pour découvrir un monde ravagé par une épidémie de zombie. Aprés avoir retrouvé sa famille il devient rapidement le chef d'une bande de survivants. Ils devront faire face aux morts-vivants, au manque de ressources et aux autres survivants parfois mal intentionnés.")

let videotheque = []

videotheque.push(erased);
videotheque.push(breakingBad);
videotheque.push(rickEtMorty);
videotheque.push(sherlock);
videotheque.push(fmab);
videotheque.push(thewalkingdead);

for ( let i = 0; i < videotheque.length; i++) {
    console.log(videotheque[i]);
}

