// src/songGenerator.js
function generateSong(title, artist, genre, duration) {
    return {
        title: title,
        artist: artist,
        genre: genre,
        duration: `${duration} mins`,
        createdAt: new Date(),
        description: `Song "${title}" by ${artist}, ${genre} genre, lasting ${duration} minutes.`,
    };
}

module.exports = generateSong;
