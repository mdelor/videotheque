const baseUrl = window.location.origin;

const toPercent = (partiel,total) => Math.round( partiel/total * 100 );

const toHoursandMinutes = (duree) => {
    const heures = Math.floor(duree/60);
    let minutes = duree - heures * 60;
    if (minutes < 10) {
        minutes = `0${minutes}`;
    } 
    return `${heures}h ${minutes}min`
};

const dureeSerie = (nbrEpisodes, dureeEpisode) => (nbrEpisodes * dureeEpisode);