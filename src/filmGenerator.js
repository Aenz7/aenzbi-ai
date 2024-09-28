// src/filmGenerator.js
function generateFilm(title, genre, director) {
    return {
        title: title,
        genre: genre,
        director: director,
        createdAt: new Date(),
        description: `Film titled "${title}", a ${genre} directed by ${director}.`,
    };
}

module.exports = generateFilm;
